import 'babel/polyfill'

import page     from 'page'
import ReactDOM from 'react-dom'

import getEmbeddedState    from 'client/utils/get-embedded-state'
import createRootComponent from 'client/utils/create-root-component'

import ExampleView                  from 'client/views/example'
import * as ExampleViewState        from 'client/views/example/state'
import ExampleDetailsView           from 'client/views/example-details'
import * as ExampleDetailsViewState from 'client/views/example-details/state'

const MountPoint = document.getElementById('app')

function createComponentRoute(component, state) {
  return function handler(ctx) {
    let store = state.createStore(
      Object.assign({ }, getEmbeddedState(), {
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
  createComponentRoute(
    ExampleView, ExampleViewState))

page('/:example',
  createComponentRoute(
    ExampleDetailsView, ExampleDetailsViewState))

page.start()
