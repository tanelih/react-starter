import express  from 'express'
import ReactDOM from 'react-dom/server'

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

const app = express()
  .use('/dist', express.static('dist/client'))

  .get('/', (req, res) => {
    let data = {
      route: {
        path:   req.path,
        params: req.params
      },
      examples: ['one', 'two']
    }
    return res.status(200).send(template(
      render(ExampleView, initExampleViewStore(data)), data))
  })

  .get('/:example', (req, res) => {
    let data = {
      route: {
        path:   req.path,
        params: req.params
      },
      example: { name: req.params.example }
    }
    return res.status(200).send(template(
      render(ExampleDetailsView, initExampleDetailsViewStore(data)), data))
  })

app.listen(8080)
