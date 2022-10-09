/** @format */

// den må ikke være reaktiv siden siden er statisk.

import { ref } from "vue"

const projectService = (function () {
  const project = ref([
    {
      image: "cd.png",
      title: "Visuellt prosjekt 1",
      path: "cdproject",
    },
    {
      image: "book.png",
      title: "Visuellt prosjekt 2",
      path: "book",
    },
    {
      image: "sad.png",
      title: "Visuellt prosjekt 3",
      path: "poster",
    },
    {
      image: "app.png",
      title: "Interaksjondesgin prosjekt",
      path: "plantbox",
    },

    {
      image: "villaParadisoStempel.svg",
      title: "Webutvikling 1 prosjekt",
      path: "villaparadiso",
    },

    {
      image: "winkingGhost.png",
      title: "Webutvikling 2 prosjekt",
      path: "ghostcards",
    },
  ])

  const getAll = () => project

  return {
    getAll,
  }
})()

export default projectService
