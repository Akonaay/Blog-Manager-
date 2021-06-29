<template>
  <div id="dashboard">
    <h3>Blogs Dashboard</h3>

    <div class="row mt-3">
      <div class="col-md-3 mb-3" v-for="blog in blogs" :key="blog.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ blog.title }}</h5>
            <p class="card-text">
              {{ blog.description }}
            </p>

            <div class="d-flex justify-content-between">
              <a class="card-link">By {{ blog.author }}</a>
              <router-link
                :to="{ name: 'view-blog', params: { blog_id: blog.blog_id } }"
                class="mt-1"
                ><i class="far fa-eye"></i
              ></router-link>
            </div>
            <!-- <a class="card-link">By {{ blog.author }}</a> -->
            <!-- <a href="#" class="card-link">{{ blog.created_at }}</a> -->
          </div>
        </div>
      </div>
    </div>
    <router-link to="/new" class="float"
      ><i class="fa fa-plus my-float"></i
    ></router-link>
  </div>
</template>

<script>
import db from "./firebaseInit";
const blogsCollection = db.collection("blog");
export default {
  name: "dashboard",
  data() {
    return {
      blogs: [],
    };
  },
  async created() {
    await blogsCollection.get().then((docs) => {
      docs.forEach((doc) => {
        // console.log(doc.data());
        const data = {
          id: doc.id,
          blog_id: doc.data().blog_id,
          title: doc.data().title,
          description: doc.data().description,
          author: doc.data().author,
          created_at: doc.data().created_at,
          updated_at: doc.data().updated_at,
        };

        this.blogs.push(data);
      });
    });
  },
};
</script>

<style></style>
