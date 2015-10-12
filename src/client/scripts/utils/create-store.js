import {
  applyMiddleware,
  combineReducers,
  createStore as createReduxStore,
} from 'redux'

import thunk  from 'redux-thunk'
import logger from 'redux-logger'

const createStoreWithMiddleware =
  applyMiddleware(thunk, logger())(createReduxStore)

/**
 * Basically a curried version of 'createStore'.
 *
 * @param  {object}   reducers - Reducer functions passed to 'combineReducers'.
 * @return {function}          - The function to actually create the store.
 */
export default function createStore(reducers) {
  return initialState =>
    createStoreWithMiddleware(combineReducers(reducers), initialState)
}
