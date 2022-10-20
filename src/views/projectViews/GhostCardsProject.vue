<!-- @format -->

<template>
  <div data-aos="fade-up" data-aos-duration="800">
    <section class="">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-sm-10 col-md-10 col-lg-10">
            <h2 class="text-style top-text">Webutvikling</h2>
            <div class="row justify-content-center">
              <p class="text-spacing text-start col-sm-12 col-lg-8">
                Prosjekt hvor vi skulle lage en nettside med rammeverket VUE. Vi
                skulle ogås vise forskjellig sorterings funksjonalitet i
                oppgaven. Nettsiden skulle dreie seg om en hobby man har. Min
                hobby er å tegne så jeg lagde en nettside rundt spøkelses
                tegningen mine, hvor man kunne lage kort og printe de ut.
              </p>
            </div>

            <img class="img-size" src="@/assets/images/webGhost1.png" alt="" />
            <div class="brake"></div>
            <img class="img-size" src="@/assets/images/webGhost2.png" alt="" />
            <div class="brake"></div>
            <img class="img-size" src="@/assets/images/webGhost3.png" alt="" />
            <div class="brake"></div>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-md-4 col-lg-4">
            <img
              class="img-size mb-4"
              src="@/assets/images/webGhost4.png"
              alt=""
            />
          </div>

          <div class="last-item col-sm-8 col-md-4 col-lg-4">
            <img class="img-size" src="@/assets/images/webGhost5.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <div class="btn-spacing sticky-bottom">
      <button
        type="button"
        class="btn btn-light back-btn-style"
        @click="goBack"
      >
        <i class="bi bi-arrow-left-circle back-btn-icon"></i>
      </button>
    </div>
  </div>
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
.brake {
  padding-bottom: 4rem;
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

.text-spacing-bottom {
  margin-bottom: 8rem;
}

/*PC */
@media screen and (max-width: 2600px) {
  .img-size {
  }
  .text-spacing {
  }
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
