<!-- @format -->

<template>
  <the-navigation></the-navigation>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigation from "./components/shared/TheNavigation.vue"

export default {
  name: "App",
  components: {
    TheNavigation,
  },

  setup() {
    return {}
  },
}
</script>
<style>
@import "./assets/styles/sharedStyle.css";
</style>
