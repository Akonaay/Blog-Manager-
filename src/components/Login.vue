<template>
  <div class="container">
    <form class="mt-3">
      <h3 class="text-center">Sign In</h3>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" v-model="email" class="form-control" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" class="form-control" />
      </div>

      <button type="submit" v-on:click="login" class="btn btn-primary">
        Sign In
      </button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function(e) {
      e.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            alert(`You logged in as  ${user.email}`);
            // this.$router.go({ path: this.$router.path });
            this.$router.push("/");
          },
          (err) => {
            alert(err.message);
          },
        );
    },
  },
};
</script>

<style></style>
