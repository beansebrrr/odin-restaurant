import { newElement, clearContainer, bulkAppend } from "./helper"
import shopkeeperPNG from "./images/shopkeeper.png"
import littleTemmiePNG from "./images/temmie.png"

export const loadHomepage = (container) => {
  clearContainer(container)
  container.className = []

  const storefront = newElement({ tagName: "div", className: "storefront",})
  const shopkeeper = newElement({ tagName: "img", className: "shopkeeper", imgSrc: shopkeeperPNG})
  
  storefront.appendChild(shopkeeper)
  
  const infoText = bulkAppend(
    newElement({tagName: "div" }),
    [
      newElement({ tagName: "h1", textContent: "fhsdhjf dsfjsd dshjfsd" }),
      newElement({ tagName: "p", textContent: "HOI!!! i'm temmie" }),
      newElement({ tagName: "p", textContent: "go to TEM SHOP!!! yaYA!!!" }),
    ])  
  const littleTemmie = newElement({ tagName: "img", className: "small-temmie", imgSrc: littleTemmiePNG})
    
  const infoSection = bulkAppend(
    newElement({ tagName: "div", className: "info-section" }),
    [infoText, littleTemmie]
  );

  bulkAppend(container,
    [storefront, infoSection]
  );
}