<!-- @format -->

<template>
  <section>
    <div class="container main-spacing">
      <div class="row justify-content-start">
        <project-item
          v-for="(project, i) in projects"
          :key="i"
          :image="project.image"
          :title="project.title"
          :path="project.path"
        ></project-item>
      </div>
    </div>
  </section>
</template>

<script>
import projectService from "../../services/projectService.js"
import ProjectItem from "./ProjectItem.vue"

export default {
  setup() {
    const projects = projectService.getAll()
    return { projects }
  },
  components: {
    ProjectItem,
  },
}
</script>

<style scoped>
/*PC */
@media screen and (max-width: 2600px) {
  .main-spacing {
    padding-top: 100px;
    padding-bottom: 70px;
    padding-left: 100px;
    padding-right: 100px;
  }
}
/*Ipad */
@media screen and (max-width: 580px) {
  .main-spacing {
    padding-top: 50px;
    padding-bottom: 70px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
/*Mob */
@media screen and (max-width: 480px) {
  .main-spacing {
    padding-top: 50px;
    padding-bottom: 70px;
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
