import express  from 'express'
import ReactDOM from 'react-dom/server'

import createRootComponent from 'client/utils/create-root-component'

/**
 * TODO Clean up the way the 'state' for each state is required, currently as
 *      it stands it's a really ugly solution. However it works so whatever.
 */
import ExampleView from 'client/views/example'
import {
  initialize as initExampleViewStore,
} from 'client/views/example/store'

import ExampleDetailsView from 'client/views/example-details'
import {
  initialize as initExampleDetailsViewStore,
} from 'client/views/example-details/store'

/**
 * Template for the server rendered application.
 */
const template = (html, data) => `
  <html>
    <head>
      <title>ReactJS Redux Starter</title>
      <link rel="stylesheet" href="/dist/app.css" />
    </head>
    <body>
      <div id="app">${html}</div>
      <script id="initial-data" type="application/x-initial-data">${JSON.stringify(data)}</script>
      <script src="/dist/app.js"></script>
    </body>
  </html>
`

/**
 * Render a HTML string given a top level component and a store to attach.
 */
const render = (component, store) =>
  ReactDOM.renderToString(createRootComponent(component, store))

/**
 * @external {Application} http://expressjs.com/4x/api.html#app
 */

/**
 * ExpressJS application configured and ready to listen for incoming connections
 * from the outside world. Woo.
 *
 * @type {Application}
 */
export default express()
  .use('/dist', express.static('dist/client'))

  .get('/', (req, res) => {
    const data = {
      route: {
        path:   req.path,
        params: req.params,
      },
      examples: ['one', 'two'],
    }
    return res.status(200).send(template(
      render(ExampleView, initExampleViewStore(data)), data))
  })

  .get('/:example', (req, res) => {
    const data = {
      route: {
        path:   req.path,
        params: req.params,
      },
      example: { name: req.params.example },
    }
    return res.status(200).send(template(
      render(ExampleDetailsView, initExampleDetailsViewStore(data)), data))
  })
