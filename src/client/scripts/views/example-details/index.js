import page                 from 'page'
import React, { PropTypes } from 'react'

import { fetchExample,
         deleteExample, } from 'client/views/example-details/actions'

export default React.createClass({
  contextTypes: {
    dispatch: PropTypes.func.isRequired
  },

  shouldComponentUpdate(next) {
    return next.state.example ? true : !!page('/')
  },

  componentDidMount() {
    this.context.dispatch(fetchExample(this.props.state.route.params.example))
  },

  deleteExample() {
    this.context.dispatch(deleteExample())
  },

  render() {
    return (
      <section className="view-example-details">
        <div className="app-state">
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </div>
        <div className="app-state-operations">
          <button onClick={this.deleteExample}>Delete Example</button>
        </div>
      </section>
    )
  }
})
