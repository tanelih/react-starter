import 'babel/polyfill'

import page               from 'page'
import createRouteHandler from 'client/utils/create-route-handler'

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
 * Actual route definitions are here.
 */

page('/',
  createRouteHandler(
    ExampleView, initExampleViewStore))

page('/:example',
  createRouteHandler(
    ExampleDetailsView, initExampleDetailsViewStore))

page.start()
