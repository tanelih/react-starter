import {
  applyMiddleware,
  combineReducers,
  createStore as createReduxStore,
} from 'redux'

import logger  from 'redux-logger'
import promise from 'redux-promise'

const createStoreWithMiddleware =
  applyMiddleware(promise, logger())(createReduxStore)

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
