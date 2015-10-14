import { createAction } from 'redux-actions'

export const FETCH_EXAMPLE  = 'FETCH_EXAMPLE'
export const DELETE_EXAMPLE = 'DELETE_EXAMPLE'

/**
 * @type {Function}
 * @desc Fetch the specified example.
 *
 * @param  {String} example - The example to fetch.
 * @return {Promise<String, Error>}
 */
export const fetchExample = createAction(FETCH_EXAMPLE,
  example => new Promise(resolve =>
    setTimeout(() => resolve({ name: example }), 2000)))

/**
 * @type {Function}
 * @desc Delete the specified example.
 *
 * @param  {String} example - The example to fetch.
 * @return {Promise<, Error>}
 */
export const deleteExample = createAction(DELETE_EXAMPLE,
  example => new Promise(resolve => setTimeout(() => resolve(), 2000)))
