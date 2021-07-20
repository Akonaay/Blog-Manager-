<template>
  <div class="container">
    <form class="mt-3">
      <h3 class="text-center">Register</h3>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" v-model="email" class="form-control" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" class="form-control" />
      </div>

      <button type="submit" v-on:click="register" class="btn btn-primary">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register: function(e) {
      e.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            alert(`Account created for ${user.email}`);
            this.$router.go({ path: this.$router.path });
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
