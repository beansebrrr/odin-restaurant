import { newElement, clearContainer, bulkAppend } from "./helper"
import shopkeeperPNG from "./images/shopkeeper.png"


function shopItem({ name, price, note }) {
  const nameElement = newElement({tagName: "h3", className: "shop-item__name", textContent: name})
  if (note) {
    nameElement.appendChild(newElement({tagName: "span", className: "shop-item__note", textContent: note}))
  }
  const priceElement = newElement({tagName: "p", className: "shop-item__price", textContent: price})
  const shopItemElement = newElement({tagName: "li", className: "shop-item"})
  
  bulkAppend(shopItemElement, [nameElement, priceElement])
  return shopItemElement
}

export function loadShop(container) {
  clearContainer(container)
  container.classList = ["shop-page"]

  const shoplistContainer = newElement({ tagName: "div", className: "shop-page" })
  shoplistContainer.appendChild(newElement({tagName: "h1", textContent: "We hab...!"}))

  const shoplist = bulkAppend(newElement({ tagName:"ul" }),
  [
    newElement({ tagName: "img", className: "shopkeeper", imgSrc: shopkeeperPNG }),
    shopItem({ name: "tem flake", price: 3 }),
    shopItem({ name: "tem flake", price: 1, note: "ON SALE," }),
    shopItem({ name: "tem flake", price: 20, note: "expensiv" }),
    shopItem({ name: "tem flake", price: 1000, note: "premiem" }),
    shopItem({ name: "tem pay 4 colleg", price: 1000 }),
  ])

  shoplistContainer.appendChild(shoplist)

  container.appendChild(shoplistContainer)
}