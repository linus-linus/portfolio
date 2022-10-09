/** @format */

import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import CvView from "../views/CvView.vue"
import ProjectsView from "../views/ProjectsView.vue"
import CdProject from "../views/projectViews/CdProject.vue"
import BookProject from "../views/projectViews/BookProject.vue"
import PosterProject from "../views/projectViews/PosterProject.vue"
import PlantBoxProject from "../views/projectViews/PlantBoxProject.vue"
import GhostCardsProject from "../views/projectViews/GhostCardsProject.vue"
import VillaParadisoProject from "../views/projectViews/VillaParadisoProject.vue"

const routes = [
  {
    name: "HomeView",
    path: "/",
    component: HomeView,
  },
  {
    name: "CvView",
    path: "/cv",
    component: CvView,
  },
  {
    name: "ProjectsView",
    path: "/projects",
    alias: "/hobby",
    component: ProjectsView,
  },
  {
    name: "CdProject",
    path: "/cdproject",
    component: CdProject,
  },
  {
    name: "BookProject",
    path: "/book",
    alias: ["/bok", "/book-project", "/bok-prosjekt"],
    component: BookProject,
  },
  {
    name: "PosterProject",
    path: "/poster",
    alias: ["/plakat", "/poster"],
    component: PosterProject,
  },
  {
    name: "PlantBoxProject",
    path: "/plantbox",
    alias: "/plantbox",
    component: PlantBoxProject,
  },

  {
    name: "GhostCards",
    path: "/ghostcards",
    alias: "/ghostcards",
    component: GhostCardsProject,
  },

  {
    name: "villaParadiso",
    path: "/villaparadiso",
    alias: "/villaparadiso",
    component: VillaParadisoProject,
  },
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
