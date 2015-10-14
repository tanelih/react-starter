import { createAction } from 'redux-actions'

export const FETCH_EXAMPLES = 'FETCH_EXAMPLES'
export const CREATE_EXAMPLE = 'CREATE_EXAMPLE'

/**
 * @type {Function}
 * @desc Fetch all the examples.
 *
 * @return {Promise<String[], Error>}
 */
export const fetchExamples = createAction(FETCH_EXAMPLES,
  () => new Promise(resolve =>
    setTimeout(() => resolve(['one', 'two']), 2000)))

/**
 * @type {Function}
 * @desc Create a new example.
 *
 * @param  {String} example - The example to create.
 * @return {Promise<String, Error>}
 */
export const createExample = createAction(CREATE_EXAMPLE,
  example => new Promise(resolve => setTimeout(() => resolve(example), 2000)))
