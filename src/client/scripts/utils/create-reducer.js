/**
 * Creates a simple reducer from the given handlers, that matches the action's
 * type to the possible handler.
 *
 * @param {?}      initial  - Initial state.
 * @param {object} handlers - Handlers for different action types.
 *
 * @return {function} - The reducer function.
 */
export default function createReducer(initial, handlers = {}) {
  return function reducer(state, action) {
    return handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action) : state || initial
  }
}
