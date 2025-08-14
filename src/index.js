import "./fonts.css"
import "./style.css"

import { loadHomepage } from "./home"
import { loadShop } from "./shop"
import { createAccordion } from "./about"

const contentContainer = document.querySelector("div#content")

// loadHomepage(contentContainer)
// loadShop(contentContainer)

contentContainer.appendChild(createAccordion("Hello", ["HOI", "i'm temmie"]))