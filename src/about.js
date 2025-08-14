import { newElement, clearContainer } from "./helper"

export function createAccordion(title, content) {
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

  const accordion = newElement({ tagName: "div", className: "accordion" });
  accordion.appendChild(titleElement);
  accordion.appendChild(contentElement);
  
  function toggleCollapsed() {
    accordion.classList.toggle("accordion--collapsed")
  }
  titleElement.addEventListener("click", toggleCollapsed)

  return accordion;
}

const accordionBoard = newElement({ tagName: "section", className: "qna-board" })