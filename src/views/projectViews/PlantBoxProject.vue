<!-- @format -->

<template>
  <div class="btn-spacing fixed-bottom">
    <button type="button" class="btn btn-light back-btn-style" @click="goBack">
      <i class="bi bi-arrow-left-circle back-btn-icon"></i>
    </button>
  </div>
  <section class="">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <h2 class="text-style top-text">Interaksjonsdesign 1</h2>
        </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-10 col-md-10 col-lg-8">
          <p class="text-spacing text-start">
            I dette prosjek jobbet jeg med en medstudent, hvor vi har jobbet med
            hvordan man på best mulig vis kan utvikle en digital løsning til
            PlantBox. Hvilke behov PlantBox og brukeren av den digitale
            løsningen har, og hvordan den har blitt utformet.
          </p>
        </div>
      </div>
    </div>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-md-4 col-lg-4">
          <img class="img-size" src="@/assets/images/plantBox1.png" alt="" />
        </div>
        <div class="col-sm-8 col-md-4 col-lg-4">
          <img class="img-size" src="@/assets/images/plantBox2.png" alt="" />
        </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-10 col-md-10 col-lg-8">
          <p class="text-spacing text-start">
            PlantBox er et plantehotell som trengte en digital løsning for å
            kommunisere med kundene sine. De tilbyr en løsning for personer
            (planteelskere) som ikke har mulighet til å ta vare på plantene sine
            over en lengre periode, av forskjellige årsaker. Løsningen er å
            sjekke planter inn på et selvbetjent plantehotell. Vår oppgave var å
            utvikle den digitale løsningen. Vi har jobbet med å finne målgruppe
            og har gått gjennom designprosess, brukervennlighet, utvikling av
            prototyper og brukertesting. Under disse fasene har vi brukt teori
            vi har lært gjennom undervisning, bøker og artikler som vi har
            innhentet selv fra relevante kilder på nettet.
          </p>
          <p class="text-spacing text-start">
            Resultatet ble en app hvor kunden kan booke rom på PlantBox sitt
            plantehotell. Hotellet er selvbetjent, så kunden kommer seg inn på
            hotellet ved hjelp av en QR-kode, og sjekker inn planten(e) helt inn
            til det korrekte rommet de skal være på. Kunden har på forhånd
            bestemt stell til planten(e) i appen, som ansatte i PlantBox tar
            hånd om. Eksamen vår avsluttes med en konklusjon som reflekterer
            over prosjektet og legger fram mulige neste steg.
          </p>
        </div>
      </div>
    </div>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-md-4 col-lg-4">
          <img class="img-size" src="@/assets/images/plantBox3.png" alt="" />
        </div>
        <div class="col-sm-8 col-md-4 col-lg-4">
          <img class="img-size" src="@/assets/images/plantBox4.png" alt="" />
        </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-6 col-md-4 col-lg-4">
          <p class="text-spacing text-start">
            Link til prototype i Figma
            <a
              href="https://www.figma.com/file/sGxgxmD8Ih7AX0IfNFX1lS/klikkbar-prototype-2.0?node-id=2%3A487
"
            >
              Klikk her!
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-md-4 col-lg-4">
          <img class="img-size" src="@/assets/images/plantBox5.png" alt="" />
        </div>
        <div class="col-sm-8 col-md-4 col-lg-4">
          <img class="img-size" src="@/assets/images/plantBox6.png" alt="" />
        </div>
      </div>
    </div>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-md-4 col-lg-4">
          <img class="img-size" src="@/assets/images/plantBox7.png" alt="" />
        </div>
        <div class="col-sm-8 col-md-4 col-lg-4">
          <img class="img-size" src="@/assets/images/plantBox8.png" alt="" />
        </div>
      </div>
    </div>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-md-4 col-lg-4">
          <img class="img-size" src="@/assets/images/plantBox9.png" alt="" />
        </div>
        <div class="col-sm-8 col-md-4 col-lg-4">
          <!-- <img class="img-size" src="@/assets/images/plantBox9.png" alt="" /> -->
        </div>
      </div>
    </div>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8 col-lg-8">
          <img
            class="img-size-bottom"
            src="@/assets/images/plantBoxAll.svg"
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
.img-size {
  width: 70%;
}
.img-size-bottom {
  width: 100%;
  margin-bottom: 6rem;
  background-color: gainsboro;
  padding: 2rem;
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
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
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
}
</style>
