import React, { createElement } from 'react'
import { Provider }             from 'react-redux'

/**
 * Creates a renderable root component for the application, that is subscribed
 * to the given 'store' and will re-render itself whenever the store's state
 * changes.
 *
 * All children, including the given 'component' have access to 'dispatch' in
 * their 'context', which can be used to dispatch actions.
 *
 * @param {ReactComponent} component - Component that will become the root.
 * @param {ReduxStore}     store     - Store to subscribe to.
 *
 * @return {ReactElement} The root component, ready to be rendered.
 */
export default function createRootComponent(component, store) {
  return <Provider store={store}>{createElement(component)}</Provider>
}
