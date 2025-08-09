import "./fonts.css"
import "./style.css"

import { loadHomepage } from "./home"
import { loadShop } from "./shop"

const contentContainer = document.querySelector("div#content")

loadHomepage(contentContainer)
loadShop(contentContainer)