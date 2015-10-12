import createStore   from 'client/utils/create-store'
import createReducer from 'client/utils/create-reducer'

import {
  FETCH_EXAMPLES,
  CREATE_EXAMPLE,
} from 'client/views/example/actions'

const RouteReducer = createReducer({ params: {}, path: '/' })

const ExampleListReducer = createReducer([], {
  [FETCH_EXAMPLES]: (examples, action) => action.payload,
  [CREATE_EXAMPLE]: (examples, action) => examples.concat([action.payload]),
})

export const initializeStore = createStore({
  route:    RouteReducer,
  examples: ExampleListReducer,
})
