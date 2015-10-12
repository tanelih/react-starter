import page                 from 'page'
import React, { PropTypes } from 'react'

import {
  fetchExamples,
  createExample,
} from 'client/views/example/actions'

export default React.createClass({
  propTypes: {
    state: PropTypes.object.isRequired,
  },

  contextTypes: {
    dispatch: PropTypes.func.isRequired,
  },

  componentDidMount() {
    this.context.dispatch(fetchExamples())
  },

  createExample() {
    this.context.dispatch(createExample('example'))
  },

  viewExampleDetails(example) {
    page(`/${example}`)
  },

  renderExamples() {
    return this.props.state.examples.map((example, index) =>
      <li key={index} onClick={() => this.viewExampleDetails(example)}>
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
          <button onClick={this.createExample}>Create Example</button>
        </div>
        <ul className="examples">
          {this.renderExamples()}
        </ul>
      </section>
    )
  },
})
