import { combineReducers } from 'redux'

import createReducer    from 'client/utils/create-reducer'
import createThunkStore from 'client/utils/create-thunk-store'

import { FETCH_EXAMPLE,
         DELETE_EXAMPLE, } from 'client/views/example-details/actions'

const RouteReducer = createReducer({ params: {}, path: '' })

const ExampleReducer = createReducer({ name: 'unknown' }, {
  [FETCH_EXAMPLE]:  (example, action) => action.payload,
  [DELETE_EXAMPLE]: (example, action) => null
})

export function createStore(initialState = {}) {
  let reducers = combineReducers({
    route:   RouteReducer,
    example: ExampleReducer
  })
  return createThunkStore(reducers, initialState)
}
