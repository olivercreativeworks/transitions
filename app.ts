'https://stackoverflow.com/questions/55781559/what-does-the-as-keyword-do'
'https://stackoverflow.com/questions/40081332/what-does-the-is-keyword-do-in-typescript'

function isHTMLCollection(elements: any): elements is HTMLCollection{
 return elements !== undefined
}

function isHTMLElement(element: any):
 element is HTMLElement{
 return element!==undefined
 }

function isObject(element: any) {
 return element !== undefined
}

function applyTransition(toggleTransitionFunc: Function, transitionAttribute:string) {
 let body = document.querySelector('body')
 if (isHTMLCollection(body)) {
  let bodyElements = body.children
  toggleTransitionFunc(bodyElements, transitionAttribute)
 }
}

function toggleTransition(elements: HTMLCollection, transitionAttr:string) {
 Array.from(elements).forEach((element) => {
  if (element.matches('button')) {
   return
  }
  element.classList.add('toggleTransition')
  if (element.classList.contains(transitionAttr)) {
   element.classList.remove(transitionAttr)
   console.log(`T: ${transitionAttr}`)
   return
  }
  element.classList.add(transitionAttr)
  console.log(`C: ${element.classList}`)
 })
}

function toggleText(element:HTMLElement, defaultText: string, newText: string) {
  element.innerHTML = (element.innerHTML == defaultText) ? newText : defaultText
}

let visibilityButton = document.querySelector('.change_visibility')
if (visibilityButton) {
 visibilityButton.addEventListener('click', () => { applyTransition(toggleTransition, 'visibility')
  if (isHTMLElement(visibilityButton)) {
   toggleText(visibilityButton, 'Hide', 'Show')
  }
 })
}

let sizeButton = document.querySelector('.change_size')
if (sizeButton) {
 sizeButton.addEventListener('click', () => {
  applyTransition(toggleTransition, 'size')
  if (isHTMLElement(sizeButton)) {
   toggleText(sizeButton, 'Grow', 'Shrink')
  }
 })
}

let colorButton = document.querySelector('.change_color')

if (colorButton) {
 colorButton.addEventListener('click', () => {
  if (!isHTMLElement(colorButton)) {
   return
  }
  let currentColor = colorButton.innerHTML
  applyTransition(toggleColor, currentColor)

  let colorsList = ['Red', 'Blue', 'Yellow']
  let newColorList = colorsList.filter((color) => {
   return color !== currentColor
  })

  let nextColor = newColorList[Math.floor((Math.random()) * newColorList.length)]

  toggleText(colorButton, currentColor, nextColor)
  })
 }


function toggleColor(elements: HTMLCollection, transitionColor:string) {
 Array.from(elements).forEach((element) => {
  if (element.matches('button')) {
   return
  }
  element.classList.add('toggleTransition')
  element.setAttribute('style', `color:${transitionColor}`)
 })
}