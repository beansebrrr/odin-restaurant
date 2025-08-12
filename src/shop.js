import { newElement, clearContainer } from "./helper"
import temShopkeeperPNG from "./images/shopkeeper.png"


class shopItem {
  constructor({ name, price, note }) {
    this.name = name;
    this.price = price;
    this.note = note ? note : "";
  }
  
  getElement() {
    const nameElement = newElement({tagName: "h3", className: "shop-item__name", textContent: this.name})
    if (this.note) {
      nameElement.appendChild(newElement({tagName: "span", className: "shop-item__note", textContent: this.note}))
    }
    const priceElement = newElement({tagName: "p", className: "shop-item__price", textContent: this.price})
    const shopItemElement = newElement({tagName: "li", className: "shop-item"})

    shopItemElement.appendChild(nameElement)
    shopItemElement.appendChild(priceElement)
    return shopItemElement
  }
}

function createShoplist(arrayOfShopItems) {
  const listElement = newElement({ tagName: "ul"})
  const temmieShopkeeper = newElement({ tagName: "img", className: "shopkeeper"})
  temmieShopkeeper.src = temShopkeeperPNG

  listElement.appendChild(temmieShopkeeper)

  arrayOfShopItems.forEach(shopItem => {
    listElement.appendChild(shopItem.getElement())
  });

  return listElement;
}

export function loadShop(container) {
  clearContainer(container)
  const shoplistContainer = newElement({ tagName: "div", className: "shop-page" })
  shoplistContainer.appendChild(newElement({tagName: "h1", textContent: "We hab...!"}))

  const shoplist = createShoplist([
      new shopItem({ name: "tem flake", price: 3 }),
      new shopItem({ name: "tem flake", price: 1, note: "ON SALE," }),
      new shopItem({ name: "tem flake", price: 20, note: "expensiv" }),
      new shopItem({ name: "tem flake", price: 1000, note: "premiem" }),
      new shopItem({ name: "tem pay 4 colleg", price: 1000 }),
  ])

  shoplistContainer.appendChild(shoplist)

  container.appendChild(shoplistContainer)
}