import page                 from 'page'
import { connect }          from 'react-redux'
import React, { PropTypes } from 'react'

import {
  fetchExample,
  deleteExample,
} from 'client/views/example-details/actions'

const connector = connect(
  state => ({
    route:   state.route,
    example: state.example,
  }),
  dispatch => ({
    onFetchExample:  id => dispatch(fetchExample(id)),
    onDeleteExample: id => dispatch(deleteExample(id)),
  }))

export default connector(React.createClass({
  propTypes: {
    example:         PropTypes.object.isRequired,
    onFetchExample:  PropTypes.func.isRequired,
    onDeleteExample: PropTypes.func.isRequired,
  },

  componentDidMount() {
    this.props.onFetchExample(this.props.route.params.example)
  },

  deleteExample() {
    this.props.onDeleteExample(this.props.example)
      .then(() => page('/'))
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
  },
}))
