import ReactDOM from 'react-dom'

import getEmbeddedState    from 'client/utils/get-embedded-state'
import createRootComponent from 'client/utils/create-root-component'

/**
 * Reference to the DOM element the application will be mounted to.
 */
const MountPoint = document.getElementById('app')

/**
 * Creates a PageJS handler, which will render the given component to the
 * application's mount point when triggered.
 *
 * @param {object}   component - A ReactJS component.
 * @param {function} initStore - Function to initialize the view's state store
 *                               with initial data.
 *
 * @return {function} - The handler function for the PageJS route.
 */
export default function createRouteHandler(component, initStore) {
  return function handler(ctx) {
    const store = initStore(Object.assign({ }, getEmbeddedState(), {
      route: {
        path:   ctx.path,
        params: ctx.params,
      },
    }))
    return ReactDOM.render(
      createRootComponent(component, store), MountPoint)
  }
}
