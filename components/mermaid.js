import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mermaid from 'mermaid'

export class Mermaid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      svg: null,
    }

    mermaid.mermaidAPI.initialize({
      startOnLoad: false,
      theme: 'forest',
    })
  }

  componentDidMount() {
    mermaid.mermaidAPI.render(this.props.id, this.props.content, svg => {
      this.setState({ svg })
    })
  }

  render() {
    if (!this.state.svg) {
      return <div>Loading...</div>
    }

    return <div dangerouslySetInnerHTML={{ __html: this.state.svg }} />
  }
}

Mermaid.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export const graph = `
graph TD;
    UI-->Use-cases;
    Databases-->Use-cases;
    Frameworks-->Use-cases;
    Other-Details-->Use-cases;
`
