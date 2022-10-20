<!-- @format -->

<template>
  <div
    data-aos="zoom-in"
    data-aos-duration="800"
    class="col-sm-12 col-md-6 col-lg-4"
  >
    <router-link :to="{ path }">
      <div class="card card-size text-center">
        <div class="card-body card-size-style">
          <div
            @mouseover="hover = true"
            @mouseleave="hover = false"
            class="btn-background"
          >
            <div class="btn-size-style">
              <button type="button " class="btn">
                <img
                  :src="require(`@/assets/images/${image}`)"
                  class="card-img-top img-size mx-auto"
                  alt=""
                />

                <div v-if="hover">
                  <h2 class="titel-style">{{ title }}</h2>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    path: String,
  },
  data() {
    return {
      hover: false,
    }
  },
}
</script>
<style scoped>
.btn-size-style {
  height: 240px;
  /* width: 280px; */
}
.card-size {
  border: none;
}
.btn-background {
  padding: 0.6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.3rem;
}
.btn-background:hover {
  background-color: #e9f3ed;
}
.titel-style {
  font-size: 0.8rem;
  margin-top: 2.5rem;
  color: black;
}

.img-size {
  height: 150px;
  width: 150px;
}
.test-style:hover {
  display: block;
}

/*Mob */
@media screen and (max-width: 480px) {
  .btn-background {
    background-color: #e9f3ed;
  }
  .titel-style {
    background-color: red !important;
    display: block !important;
    color: black !important;
  }
}
</style>
