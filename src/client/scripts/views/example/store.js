import { handleActions } from 'redux-actions'

import {
  FETCH_EXAMPLES,
  CREATE_EXAMPLE,
} from 'client/views/example/actions'

import createStore from 'client/utils/create-store'

// a simple "identity" reducer, which never "alters" the state
const RouteReducer = route => route || { path: '/', params: {} }

// a basic reducer created using 'redux-actions' helpers
const ExampleListReducer = handleActions({
  [FETCH_EXAMPLES]: (examples, action) => action.payload,
  [CREATE_EXAMPLE]: (examples, action) => examples.concat([action.payload]),
}, [])

/**
 * @type {Function}
 * @desc Initialize the store with initial state.
 *
 * @param  {*}      initialState - Initial state for the store.
 * @return {Object}              - The initialized Redux store.
 */
export const initialize = createStore({
  route:    RouteReducer,
  examples: ExampleListReducer,
})
