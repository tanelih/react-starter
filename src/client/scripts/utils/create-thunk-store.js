import { createStore,
         applyMiddleware } from 'redux'
import thunk               from 'redux-thunk'
import createLogger        from 'redux-logger'

/**
 * Create a Redux store with Thunk and Logger middleware already applied.
 *
 * @type {function}
 */
export default applyMiddleware(thunk, createLogger())(createStore)
