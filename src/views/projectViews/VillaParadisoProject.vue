<!-- @format -->

<template>
  <div class="btn-spacing fixed-bottom">
    <button type="button" class="btn btn-light back-btn-style" @click="goBack">
      <i class="bi bi-arrow-left-circle back-btn-icon"></i>
    </button>
  </div>
  <section class="all-background-color">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-md-8 col-lg-8">
          <h2 class="text-style top-text">Webutvikling</h2>
          <div class="row justify-content-center">
            <p class="text-spacing text-start col-sm-12 col-lg-8">
              arbeideskrav hvor vi skulle jobbe hovedsakelig med HTML, CSS og
              JS. Hvor vi skulle kode opp en ny nettside til Villa Paradiso. Vi
              kunne utforme den slik vi selv ønsket.
            </p>
          </div>

          <img
            class="img-size"
            src="@/assets/images/villaParadiso3.png"
            alt=""
          />

          <img
            class="img-size"
            src="@/assets/images/villaParadiso4.png"
            alt=""
          />

          <p class="text-spacing text-start">Hele siden:</p>
          <img
            class="img-size"
            src="@/assets/images/villaParadiso.png"
            alt=""
          />
          <div class="brake"></div>

          <p class="text-spacing text-start">Handlekurven:</p>
          <img
            class="img-size last-item"
            src="@/assets/images/villaParadiso2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
.all-background-color {
  background-color: #e9f3ed;
}

.img-size {
  width: 100%;
}
.img-size-orange {
  width: 7rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.text-spacing {
  font-size: 0.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/*Ipad */
@media screen and (max-width: 580px) {
  .img-size {
    width: 80%;
  }
  .text-spacing {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
/*Mob */
@media screen and (max-width: 480px) {
  .img-size {
    width: 80%;
  }
  .text-spacing {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
</style>
