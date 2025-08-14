import { newElement, clearContainer, bulkAppend } from "./helper"
import shopkeeperPNG from "./images/shopkeeper.png"

function createAccordion({ title, content }) {
  const titleElement = newElement({ tagName: "button", className: "accordion-title", textContent: title });
  let contentElement;
  
  if (typeof(content) == "string") contentElement = newElement({ tagName: "p", className: "accordion-content", textContent: `*${content}` });
  else if (typeof(content) == "object") {
    contentElement = newElement({ tagName: "p", className: "accordion-content"});
    content.forEach(line => {
      contentElement.append(`*${line}`)
      contentElement.append(document.createElement("br"))
    });
  }

  const accordion = bulkAppend(
    newElement({ tagName: "div", className: "accordion accordion--collapsed" }),
    [titleElement, contentElement]
  );

  function toggleCollapsed() {
    accordion.classList.toggle("accordion--collapsed")
  }
  titleElement.addEventListener("click", toggleCollapsed)

  return accordion;
}


export function loadAboutPage(container) {
  clearContainer(container)
  container.classList = ["about-page"]

  const accordionBoard = bulkAppend(newElement({ tagName: "section", className: "qna-board" }),
  [
    createAccordion({ title: "hello", content: ["hOI!!!", "i'm temmie"] }),
    createAccordion({ title: "about yourself", content: ["hOI!!!", "i'm temmie"] }),
    createAccordion({ title: "temmie history", content: "us tems hav a DEEP HISTORY!!!" }),
    createAccordion({ title: "about shop", content: "yaYA!!! go to TEM SHOP!!!" }),
  ])

  bulkAppend(container, [newElement({ tagName: "img", className: "shopkeeper", imgSrc: shopkeeperPNG})])
  container.appendChild(accordionBoard)
}