import 'babel/polyfill'

import page     from 'page'
import ReactDOM from 'react-dom'

import getEmbeddedState    from 'client/utils/get-embedded-state'
import createRootComponent from 'client/utils/create-root-component'

/**
 * TODO Clean up the way the 'state' for each state is required, currently as
 *      it stands it's a really ugly solution. However it works so whatever.
 */

import ExampleView from 'client/views/example'
import {
  initializeStore as initExampleViewStore
} from 'client/views/example/state'

import ExampleDetailsView from 'client/views/example-details'
import {
  initializeStore as initExampleDetailsViewStore
} from 'client/views/example-details/state'

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
function createRouteHandler(component, initStore) {
  return function handler(ctx) {
    let store = initStore(Object.assign({ }, getEmbeddedState(), {
      route: {
        path:   ctx.path,
        params: ctx.params
      }
    }))
    return ReactDOM.render(
      createRootComponent(component, store), MountPoint)
  }
}

page('/',
  createRouteHandler(
    ExampleView, initExampleViewStore))

page('/:example',
  createRouteHandler(
    ExampleDetailsView, initExampleDetailsViewStore))


page.start()
