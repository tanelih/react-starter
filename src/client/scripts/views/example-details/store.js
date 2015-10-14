import { handleActions } from 'redux-actions'

import {
  FETCH_EXAMPLE,
  DELETE_EXAMPLE,
} from 'client/views/example-details/actions'

import createStore from 'client/utils/create-store'

// a simple "identity" reducer, which never "alters" the state
const RouteReducer = route => route || { path: '/', params: {} }

const ExampleReducer = handleActions({
  [FETCH_EXAMPLE]:  (example, action) => action.payload,
  [DELETE_EXAMPLE]: (example, action) => example,
}, { })

/**
 * @type {function}
 * @desc Initialize the store with initial state.
 *
 * @param  {*}      initialState - Initial state for the store.
 * @return {Object}              - The initialized Redux store.
 */
export const initialize = createStore({
  route:   RouteReducer,
  example: ExampleReducer,
})
