import { newElement, clearContainer } from "./helper"
import temShopkeeperPNG from "./images/tem.png"


class shopItem {
  constructor({ itemName, itemPrice, itemNote }) {
    this.name = itemName;
    this.price = itemPrice;
    this.note = itemNote ? itemNote : "";
  }
  
  getElement() {
    const nameElement = newElement({tagName: "h3", className: "item-name", textContent: this.name})
    if (this.note) {
      nameElement.appendChild(newElement({tagName: "span", className: "note", textContent: this.note}))
    }
    const priceElement = newElement({tagName: "p", className: "item-price", textContent: this.price})
    const shopItemElement = newElement({tagName: "li", className: "shop__item"})

    shopItemElement.appendChild(nameElement)
    shopItemElement.appendChild(priceElement)
    return shopItemElement
  }
}

function createShoplist(arrayOfShopItems) {
  const listElement = newElement({ tagName: "ul"})
  const temmieShopkeeper = newElement({ tagName: "img", className: "temmie-shopkeeper"})
  temmieShopkeeper.src = temShopkeeperPNG

  listElement.appendChild(temmieShopkeeper)

  arrayOfShopItems.forEach(shopItem => {
    listElement.appendChild(shopItem.getElement())
  });

  return listElement;
}

export function loadShop(container) {
  clearContainer(container)
  const temflake = new shopItem({itemName: "temmie flakes", itemPrice: 1000, itemNote: "Expensiv"})
  const shoplistContainer = newElement({ tagName: "div", className: "shop-listing" })
  shoplistContainer.appendChild(newElement({tagName: "h1", textContent: "We hab...!"}))

  const shoplist = createShoplist([
      new shopItem({itemName: "tem flake", itemPrice: 3}),
      new shopItem({itemName: "tem flake", itemPrice: 1, itemNote: "ON SALE,"}),
      new shopItem({itemName: "tem flake", itemPrice: 20, itemNote: "expensiv"}),
      new shopItem({itemName: "tem flake", itemPrice: 1000, itemNote: "premiem"}),
      new shopItem({itemName: "tem pay 4 colleg", itemPrice: 1000}),
  ])

  shoplistContainer.appendChild(shoplist)


  container.appendChild(shoplistContainer)
}