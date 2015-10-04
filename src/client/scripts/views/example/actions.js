export const FETCH_EXAMPLES = 'FETCH_EXAMPLES'
export const CREATE_EXAMPLE = 'CREATE_EXAMPLE'

export const fetchExamples = () => dispatch =>
  setTimeout(() =>
    dispatch({ type: FETCH_EXAMPLES, payload: ['one', 'two', 'three'] }), 2000)

export const createExample = example => ({
  type:    CREATE_EXAMPLE,
  payload: example
})
