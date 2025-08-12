import { newElement, clearContainer } from "./helper"
import shopkeeperPNG from "./images/shopkeeper.png"
import littleTemmiePNG from "./images/temmie.png"

export const loadHomepage = (container) => {
  clearContainer(container)

  const storefront = newElement({ tagName: "div", className: "storefront",})
  const shopkeeper = newElement({ tagName: "img", className: "shopkeeper",})
  shopkeeper.src = shopkeeperPNG
  
  storefront.appendChild(shopkeeper)
  
  const infoSection = newElement({ tagName: "div", className: "info-section",})
  
  const infoText = newElement({tagName: "div",})
  infoText.appendChild(newElement({ tagName: "h1", textContent: "fhsdhjf dsfjsd dshjfsd",}))
  infoText.appendChild(newElement({ tagName: "p", textContent: "HOI!!! i'm temmie",}))
  infoText.appendChild(newElement({ tagName: "p", textContent: "go to TEM SHOP!!! yaYA!!!",}))
  
  const littleTemmie = newElement({ tagName: "img", className: "small-temmie",})
  littleTemmie.src = littleTemmiePNG
  
  infoSection.appendChild(infoText)
  infoSection.appendChild(littleTemmie)
  
  container.appendChild(storefront)
  container.appendChild(infoSection)
}