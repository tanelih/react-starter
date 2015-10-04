import express  from 'express'
import ReactDOM from 'react-dom/server'

import createRootComponent from 'client/utils/create-root-component'

import ExampleView                  from 'client/views/example'
import * as ExampleViewState        from 'client/views/example/state'
import ExampleDetailsView           from 'client/views/example-details'
import * as ExampleDetailsViewState from 'client/views/example-details/state'

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
      render(
        ExampleView,
        ExampleViewState.createStore(data)), data))
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
      render(
        ExampleDetailsView,
        ExampleDetailsViewState.createStore(data)), data))
  })

app.listen(8080)
