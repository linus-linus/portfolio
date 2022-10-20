/** @format */

import { createApp } from "vue"
import App from "./App.vue"

createApp(App).use(router, AOS.init()).mount("#app")

import AOS from "aos"
import "aos/dist/aos.css"

import router from "./router"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/js/dist/collapse"
