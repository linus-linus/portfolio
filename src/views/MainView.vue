<!-- @format -->

<template>
  <the-navigation></the-navigation>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigation from "./components/shared/TheNavigation.vue";
export default {
  components: {
    TheNavigation,
  },
};
</script>
