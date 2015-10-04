export const FETCH_EXAMPLE  = 'FETCH_EXAMPLE'
export const DELETE_EXAMPLE = 'DELETE_EXAMPLE'


export const fetchExample = example => dispatch =>
  setTimeout(() =>
    dispatch({ type: FETCH_EXAMPLE, payload: { name: example } }), 2000)

export const deleteExample = () => dispatch =>
  setTimeout(() =>
    dispatch({ type: DELETE_EXAMPLE }), 2000)
