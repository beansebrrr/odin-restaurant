import "./fonts.css"
import "./style.css"

import { loadHomepage } from "./home"
import { loadShop } from "./shop"
import { loadAboutPage } from "./about"

const contentContainer = document.querySelector("div#content")


loadHomepage(contentContainer)
loadAboutPage(contentContainer)
loadShop(contentContainer)