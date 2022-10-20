<!-- @format -->

<template>
  <div data-aos="fade-up" data-aos-duration="800">
    <section class="">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-md-6 col-lg-5">
            <h2 class="text-style top-text">Visuelt prosjekt 3</h2>

            <p class="text-spacing text-start">
              Skoleoppgave hvor vi skulle lage et visuelt uttrykk som kan brukes
              i ulike sammenhenger i opplysningsarbeid rettet mot ungdom
              og/eller skolene, som kan brukes i arbeidet mot selvskading og
              selvmord. det kunne være en plakat, nettside, blog-post, e.l. Jeg
              valgte å lage en plakat.
            </p>

            <img class="img-size" src="@/assets/images/poster.svg" alt="" />

            <p class="text-spacing text-start">
              Jeg har brukt flere virkemidler på plakaten. Det først virkemidlet
              som skal fange mottagerens oppmerksomhet er en repeterende
              illustrasjon. Brytningen i strukturen med en trist uklar smiley
              illustrere at en i mengden har selvmordstanker og ikke har det
              bra. Blikkfanget forsterkes med den sterke fargekontrasten med to
              grønnfargen. På typografien har jeg brukt flere virkemidler. Jeg
              har holdt meg til en sans serif font typen Open Sans, her har jeg
              brukt fet og normal skrift type for å skape hierarki. Jeg har
              gruppert teksten i to grupper med luft og marger. Dette skaper en
              ryddighet noe som gjør det lett å navigere seg gjennom plakaten
              fra topp til bunn. Plakaten skal oppfordre ungdom til å spørre
              hverandre om hvordan man har det og ikke være redd for å stille
              vanskelig spørsmål om tunge tanker. Ungdom i dag er raske til å
              skumlese gjennom tekst for å komme til essensen, derfor har jeg
              valgt et kort og tydelig budskap på plakaten med en tydelig
              lettleselig font. Med fet tekst på tittel til budskapet, som
              inneholder essensen av budskapet.
            </p>

            <img
              class="img-size last-item"
              src="@/assets/images/poster2.svg"
              alt=""
            />
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
  /* .tekst-style {
    width: 450px;
    padding-left: 1rem;
    padding-right: 1rem;
  } */
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
  /* .tekst-style {
    width: 340px;
    padding-left: 1rem;
    padding-right: 1rem;
  } */
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
  /* .tekst-style {
    width: 230px;
    padding-left: 1rem;
    padding-right: 1rem;
  } */
}
</style>
