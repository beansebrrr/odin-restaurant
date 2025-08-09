import { newElement, clearContainer } from "./helper"
import temShopkeeperPNG from "./images/tem.png"
import littleTemmiePNG from "./images/temmie.png"

const contentContainer = document.querySelector("#content")

export const loadHomepage = () => {
  clearContainer(contentContainer)

  const temShop = newElement({ tagName: "div", className: "tem-shop",})
  const temShopkeeper = newElement({ tagName: "img", className: "temmie-shopkeeper",})
  temShopkeeper.src = temShopkeeperPNG
  
  temShop.appendChild(temShopkeeper)
  
  const infoSection = newElement({ tagName: "div", className: "shop-info",})
  
  const infoText = newElement({tagName: "div",})
  infoText.appendChild(newElement({ tagName: "h1", textContent: "fhsdhjf dsfjsd dshjfsd",}))
  infoText.appendChild(newElement({ tagName: "p", textContent: "HOI!!! i'm temmie",}))
  infoText.appendChild(newElement({ tagName: "p", textContent: "go to TEM SHOP!!! yaYA!!!",}))
  
  const littleTemmie = newElement({ tagName: "img", className: "small-temmie",})
  littleTemmie.src = littleTemmiePNG
  
  infoSection.appendChild(infoText)
  infoSection.appendChild(littleTemmie)
  
  contentContainer.appendChild(temShop)
  contentContainer.appendChild(infoSection)

}