<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/blogger.svg" width="23" />
        <span class="m-2">Blogs Manager</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
