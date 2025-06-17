export const newElement = ({ tagName, className, id, textContent }) => {
  const element = document.createElement(tagName)
  if (className) element.classList.add(className)
  if (id) element.id = id
  if (textContent) element.textContent = textContent

  return element
}