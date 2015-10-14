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

    // since react-redux's provider component doesn't allow us to specify a new
    // store just like that, we'll need to remove the whole component tree in a
    // very explicit way... this isn't really that bad however since we're
    // changing the view here anyway
    ReactDOM.unmountComponentAtNode(MountPoint)

    return ReactDOM.render(
      createRootComponent(component, store), MountPoint)
  }
}
