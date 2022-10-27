<!-- @format -->

<template>
  <div data-aos="fade-up" data-aos-duration="800">
    <section class="">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-md-6 col-lg-5">
            <img
              class="top-img top-text"
              src="@/assets/images/cd2.png"
              alt=""
            />
            <h2 class="text-style">Visuelt prosjekt 1</h2>

            <p class="text-spacing text-start">
              Skoeleoppgave hvor vi fikk i oppgave å redesigne et plate omslag.
              Jeg valgte å redesignet Montero plateomslaget til rapperen Lil Nas
              X.
            </p>

            <p class="text-spacing text-start">Det originale plateomslaget:</p>
            <img class="img-size" src="@/assets/images/cdOrginal.png" alt="" />

            <p class="text-spacing text-start">
              Redesign av plateomslag forside:
            </p>
            <img class="img-size" src="@/assets/images/cdNewFront.png" alt="" />
            <p class="text-spacing text-start">
              Redesign av plateomslag bakside:
            </p>
            <img class="img-size" src="@/assets/images/cdNewBack.png" alt="" />
            <p class="text-spacing text-start">
              I plateomslaget tok jeg mye inspirasjon fra det originale
              plateomslaget. Jeg hentet fargepaletten derfra. Som vist på bildet
              under hentet jeg ut fargen med adobe capture appen.
            </p>
            <img class="img-size" src="@/assets/images/cdColor.png" alt="" />
            <p class="text-spacing last-item text-start">
              Lil Nas X referer mye til Edens hage i Montero albumet, noe som er
              tydelig kommunisert på det originale plateomslaget. I mitt
              redesign prøver jeg å føre denne kommunikasjonen videre. Med en
              lys og reflekterende metallisk illusjon, det skal gi en følelse
              syndfrihet eg valgte også å ha album tittelen i blindeskrift noe
              som representer inkludering. Jeg valgte å bruke en versjon av
              garamond fonten som er en serif font. Garamond er en klassisk
              font. Fonten fungere bra i det visuelle kommunikasjonen, fonten
              lar det visuelle utrykke snakke for seg selv og fanger ikke for
              stor oppmerksomhet, men er lett å lese.
            </p>
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

.top-img {
  width: 80px;
  margin-bottom: 1rem;
}
.img-size {
  width: 100%;
}
.text-spacing {
  font-size: 0.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

/*Mob */
@media screen and (max-width: 580px) {
  .img-size {
    width: 80%;
  }
  .text-spacing {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
}
@media screen and (max-width: 480px) {
  .img-size {
    width: 80%;
  }
  .text-spacing {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
</style>
