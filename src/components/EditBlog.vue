<template>
  <div id="edit-blog">
    <router-link to="/" style="text-decoration: none;"
      ><i class="fas fa-chevron-left"></i> Back</router-link
    >
    <h3>Update Blog</h3>
    <form @submit.prevent="updateBlog" class="form">
      <div class="card">
        <div class="row">
          <div class="col-md-6 mt-2">
            <div class="form-group col-md-6">
              <h6>
                <strong>Blog</strong>
              </h6>
              <input
                type="text"
                disabled
                v-model="blog_id"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-6 mt-2">
            <div class="form-group col-md-6">
              <h6>
                <strong>Author</strong>
              </h6>
              <input type="text" v-model="author" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="form-group col-md-6">
              <h6>
                <strong>Title</strong>
              </h6>
              <input type="text" v-model="title" class="form-control" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group col-md-6">
              <h6>
                <strong>Description</strong>
              </h6>
              <textarea
                class="form-control"
                v-model="description"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="form-group col-md-6">
              <h6>
                <strong>Created</strong>
              </h6>
              <input
                type="date"
                v-model="created_at"
                class="form-control txt-area"
              />
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <button type="submit" class="ml-6 btn btn-primary mb-2">
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import db from "./firebaseInit";
const blogsCollection = db.collection("blog");
export default {
  name: "edit-blog",
  data() {
    return {
      blog_id: null,
      title: null,
      description: null,
      author: null,
      created_at: null,
    };
  },
  watch: {
    $route: "fetchCollection",
  },
  methods: {
    async fetchCollection() {
      await blogsCollection
        .where("blog_id", "==", this.$route.params.blog_id)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            this.blog_id = doc.data().blog_id;
            this.title = doc.data().title;
            this.description = doc.data().description;
            this.author = doc.data().author;
            this.created_at = doc.data().created_at;
          });
        });
    },
    async updateBlog() {
      await blogsCollection
        .where("blog_id", "==", this.$route.params.blog_id)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            doc.ref
              .update({
                blog_id: this.blog_id,
                title: this.title,
                description: this.description,
                author: this.author,
                created_at: this.created_at,
              })
              .then(() => {
                this.$router.push({
                  name: "view-blog",
                  params: { blog_id: this.blog_id },
                });
              });
          });
        });
    },
  },
  created() {
    this.fetchCollection();
  },
};
</script>

<style></style>
