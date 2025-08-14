import "./fonts.css"
import "./style.css"

import { loadHomepage } from "./home"
import { loadShop } from "./shop"
import { loadAboutPage } from "./about"

const contentContainer = document.querySelector("div#content")

const navButton = {
  home  : document.querySelector("#home.nav-button"),
  buy   : document.querySelector("#buy.nav-button"),
  about : document.querySelector("#about.nav-button"),
}

navButton.home.addEventListener("click", () => loadHomepage(contentContainer))
navButton.about.addEventListener("click", () => loadAboutPage(contentContainer))
navButton.buy.addEventListener("click", () => loadShop(contentContainer))

loadHomepage(contentContainer)