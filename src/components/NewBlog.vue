<template>
  <div id="new-blog">
    <router-link to="/" style="text-decoration: none;"
      ><i class="fas fa-chevron-left"></i> Back</router-link
    >
    <h3>Create Blog</h3>
    <form @submit.prevent="saveBlog" class="form">
      <div class="card">
        <div class="row">
          <div class="col-md-6 mt-2">
            <div class="form-group col-md-6">
              <h6>
                <strong>Blog</strong>
              </h6>
              <input type="text" v-model="blog_id" class="form-control" />
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
          <div class="col-md-6 ">
            <div class="form-group ml-3">
              <h6><strong>Image</strong></h6>
              <input
                type="file"
                ref="input1"
                @change="previewImage"
                class="form-control-file"
                accept="image/*"
              />
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6 mt-4">
            <button type="submit" class="ml-6 btn btn-primary mb-2">
              Save
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
  name: "new-blog",
  data() {
    return {
      blog_id: null,
      title: null,
      description: null,
      author: null,
      created_at: null,
      imageData: null,
    };
  },
  methods: {
    async saveBlog() {
      await blogsCollection
        .add({
          blog_id: this.blog_id,
          title: this.title,
          description: this.description,
          author: this.author,
          created_at: this.created_at,
        })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
    previewImage(e) {
      // console.log(e.target.files[0]);
      this.imageData = e.target.files[0];
    },
  },
};
</script>

<style>
.ml-6 {
  margin-left: 18px !important;
}
</style>
