<!-- @format -->

<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <section class="">
      <div class="container text-center text-color top-spaceing">
        <div class="row">
          <div class="test col p-2">P</div>
          <div class="test col p-4 pb-5">R</div>
        </div>
        <div class="row">
          <div class="col p-2"></div>
          <div class="test col p-5"></div>
          <div class="test col p-1">O</div>
          <div class="col"></div>
          <div class="test col p-3">T</div>
        </div>
        <div class="row">
          <div class="test col p-0">F</div>
          <div class="col"></div>
          <div class="test col p-5">Ø</div>
          <div class="col"></div>
          <div class="test col p-5">L</div>

          <div class="col p-5"></div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="test col p-5">J</div>
          <div class="col"></div>
          <div class="test col p-5 m-4">E</div>
          <div class="col"></div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { gsap } from "gsap"
export default {
  methods: {
    // where the animation will start from
    beforeEnter(el) {
      el.style.opacity = "0"
      el.style.transform = "translateY(-60px)"
    },
    // where the animation will end up
    enter(el) {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
      })
    },
  },
}
</script>

<style scoped>
.text-color {
  color: #00967b;
  font-weight: 600;
}
.top-spaceing {
  padding-top: 200px;
}
</style>
