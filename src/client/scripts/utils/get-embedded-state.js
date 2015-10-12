/**
 * Get the initial state attached to DOM. To be honest this utility makes some
 * quite rash assumptions about how things are so keep that in mind. There is
 * also the case of having the side effect of reading and removing DOM stuffs.
 *
 * @return {object} - The initial state embedded in the DOM.
 */
export default function getEmbeddedState() {
  const dataElement = document.getElementById('initial-data')

  return dataElement
    // make sure to remove the element from the DOM in order to not read it
    // every time we re-render on the client side.
    ? dataElement.remove() || JSON.parse(dataElement.innerHTML)
    : { }
}
