import page                 from 'page'
import { connect }          from 'react-redux'
import React, { PropTypes } from 'react'

import {
  fetchExamples,
  createExample,
} from 'client/views/example/actions'

const connector = connect(
  state => ({
    examples: state.examples,
  }),
  dispatch => ({
    onFetchExamples: () => dispatch(fetchExamples()),
    onCreateExample: example => dispatch(createExample(example)),
  }))

export default connector(React.createClass({
  propTypes: {
    examples:        PropTypes.array.isRequired,
    onFetchExamples: PropTypes.func.isRequired,
    onCreateExample: PropTypes.func.isRequired,
  },

  componentDidMount() {
    this.props.onFetchExamples()
  },

  renderExamples() {
    return this.props.examples.map((example, index) =>
      <li key={index} onClick={() => page(`/${example}`)}>
        {example}
      </li>)
  },

  render() {
    return (
      <section className="view-example-list">
        <div className="app-state">
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </div>
        <div className="app-state-operations">
          <button onClick={() => this.props.onCreateExample('new-example')}>
            Create Example
          </button>
        </div>
        <ul className="examples">
          {this.renderExamples()}
        </ul>
      </section>
    )
  },
}))
