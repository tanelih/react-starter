import { combineReducers } from 'redux'

import createReducer    from 'client/utils/create-reducer'
import createThunkStore from 'client/utils/create-thunk-store'

import { FETCH_EXAMPLES,
         CREATE_EXAMPLE, } from 'client/views/example/actions'

const RouteReducer = createReducer({ params: {}, path: '/' })

const ExampleListReducer = createReducer([], {
  [FETCH_EXAMPLES]: (examples, action) => action.payload,
  [CREATE_EXAMPLE]: (examples, action) => examples.concat([action.payload])
})

export function createStore(initialState = {}) {
  let reducers = combineReducers({
    route:    RouteReducer,
    examples: ExampleListReducer
  })
  return createThunkStore(reducers, initialState)
}
