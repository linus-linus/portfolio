<!-- @format -->

<template>
  <div data-aos="fade-up" data-aos-duration="800">
    <section class="">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-md-6 col-lg-5">
            <h2 class="text-style top-text">Visuelt prosjekt 2</h2>

            <p class="text-spacing text-start">
              Skoeleoppgave hvor vi fikk i oppgave å redesigne et bokomslag. Vi
              skulle jobbe med å kommunisere omslagets, jeg valgte boken
              appelsinpiken av Jostein Gaarder.
            </p>

            <img
              class="img-size-orange"
              src="@/assets/images/bookOrange.png"
              alt=""
            />

            <p class="text-spacing text-start">Originale bokomslag</p>

            <img
              class="img-size"
              src="@/assets/images/booksOriginal.png"
              alt=""
            />

            <p class="text-spacing text-start">
              Redesign av bokomslag forside:
            </p>

            <img
              class="img-size"
              src="@/assets/images/bookNewFront.svg"
              alt=""
            />

            <p class="text-spacing text-start">
              Redesign av bokomslag bakside:
            </p>
            <img
              class="img-size"
              src="@/assets/images/bookNewBack.svg"
              alt=""
            />
            <p class="text-spacing last-item text-start">
              Dette var en bok jeg leste på ungdomskolen, og var en av de bøken
              som ga med en varm og tilfreds følelse etter jeg hadde lest ferdig
              boken. På omslaget har jeg lekt meg med appelsiner som er et ord
              som også inngår i tittelen på boken. Jeg har brukt komplementær
              farger i fargepaletten som gir en god kontrast. På omslaget så
              valgte jeg å dra den komplementære blåfargen mot det mørkere for
              at den ikke skulle bli for stikkende og konkurrere om
              oppmerksomhet med aksent fargen. Denne boken spiller mye på
              kontrasten liv og død, varme og kulde. De oransje/gule tonen på
              appelsinen i forgrunnen kommunisere varme, men den blå bakgrunn
              kommunisere en kjølighet. Jeg har brukt fonten didot som er en
              serif font til tittelen. Til forfatter navn og synopsisen brukte
              jeg sans serif font som er lett leselig. Felles for disse to
              fontene er at de har skarpe linjer, som kommunisere seriøsitet, i
              likhet med bokens tema. Tittelen er det viktigste og er derfor
              størst og i aksentfargen. All annen tekst er nedprioritert i
              hierarkiet.
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
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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
    padding-left: 3.2rem;
    padding-right: 3.2rem;
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
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  /* .tekst-style {
    width: 230px;
    padding-left: 1rem;
    padding-right: 1rem;
  } */
}
</style>
