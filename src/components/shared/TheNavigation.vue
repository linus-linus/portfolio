<!-- @format -->

<template>
  <div class="collapse" id="collapseExample"></div>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <router-link class="nav-link nav-style-balloon" to="/"
        ><i class="bi bi-balloon-fill"></i
      ></router-link>

      <button
        class="navbar-toggler test"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon test"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link nav-style nav-style-new" to="/cv"
              >CV</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-style nav-style-new" to="/projects"
              >Prosjekter</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {},
}
</script>

<style scoped>
.nav-style-balloon {
  font-size: 1.3rem;
  padding-right: 1rem;
  padding-left: 1rem;
}
.nav-style-new {
  color: black;
  font-weight: 400;
}
.nav-style-new:hover {
  color: #00967b;
}
.nav-style-new:focus {
  color: #00967b;
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
  outline: none;
  box-shadow: none;
  border: none;
}
/*Ipad */
@media screen and (max-width: 991px) {
  .nav-style-new {
    padding-left: 1rem;
  }
}
</style>
