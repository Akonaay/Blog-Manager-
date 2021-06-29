<template>
  <div id="view-blog">
    <router-link to="/" style="text-decoration: none;"
      ><i class="fas fa-chevron-left"></i> Back</router-link
    >
    <h3>Blog Details</h3>
    <div class="card card-p2">
      <div class="row">
        <div class="col-md-6 mt-2 ">
          <div class="form-group ">
            <h6>
              <strong>Blog #</strong>
            </h6>
            <p>{{ id }}</p>
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="form-group">
            <h6>
              <strong>Author</strong>
            </h6>
            <p>{{ author }}</p>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="form-group">
            <h6>
              <strong>Title</strong>
            </h6>
            <p>
              {{ title }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <h6>
              <strong>Description</strong>
            </h6>
            <p>
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md">
          <div class="form-group">
            <h6>
              <strong>Created</strong>
            </h6>
            <p>
              {{ created_at }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <button @click="deleteBlog" class="btn btn-sm">
        <i class="fas fa-trash-alt"></i>
      </button>
      <router-link
        :to="{ name: 'edit-blog', params: { blog_id: id } }"
        class="ml-2 btn btn-sm"
        style="text-decoration: none;"
        ><i class="far fa-edit"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
const blogsCollection = db.collection("blog");
export default {
  name: "view-blog",
  data() {
    return {
      id: null,
      title: null,
      description: null,
      author: null,
      created_at: null,
      updated_at: null,
    };
  },

  methods: {
    async fetchCollection() {
      await blogsCollection
        .where("blog_id", "==", this.$route.params.blog_id)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            this.id = doc.data().blog_id;
            this.title = doc.data().title;
            this.description = doc.data().description;
            this.author = doc.data().author;
            this.created_at = doc.data().created_at;
            this.updated_at = doc.data().updated_at;
          });
        });
    },
    async deleteBlog() {
      if (confirm("Are you sure?")) {
        await blogsCollection
          .where("blog_id", "==", this.$route.params.blog_id)
          .get()
          .then((docs) => {
            docs.forEach((doc) => {
              doc.ref.delete();
              this.$router.push("/");
            });
          });
      }
    },
  },

  async created() {
    this.fetchCollection();
  },
};
</script>

<style></style>
