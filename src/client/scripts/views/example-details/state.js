import createStore   from 'client/utils/create-store'
import createReducer from 'client/utils/create-reducer'

import { FETCH_EXAMPLE,
         DELETE_EXAMPLE, } from 'client/views/example-details/actions'

const RouteReducer = createReducer({ params: {}, path: '' })

const ExampleReducer = createReducer({ name: 'unknown' }, {
  [FETCH_EXAMPLE]:  (example, action) => action.payload,
  [DELETE_EXAMPLE]: (example, action) => null
})

export const initializeStore = createStore({
  route:   RouteReducer,
  example: ExampleReducer
})
