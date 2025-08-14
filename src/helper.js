export const newElement = ({ tagName, className, id, textContent, imgSrc }) => {
  const element = document.createElement(tagName)
  if (className) element.className = className
  if (id) element.id = id
  if (textContent) element.textContent = textContent

  if (tagName == "img") element.src = imgSrc

  return element
}

export const clearContainer = (selector) => {
  if (!selector) console.error("Please set a selector. Or alternatively, use an HTML element as the parameter.")
    
  if (typeof(selector) === "string") document.querySelector(selector).replaceChildren("")
  else if (selector.nodeType) selector.replaceChildren("")
  else console.error("Invalid selector. Please enter a selector or the HTML element.")
}

export const bulkAppend = (parentElement, arrayOfChildren) => {
  arrayOfChildren.forEach(child => parentElement.appendChild(child))
  return parentElement
}