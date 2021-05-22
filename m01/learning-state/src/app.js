'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
  constructor() {
    super()
    this.state = { showTimer: true, time: 0 }
  }

  componentWillMount() {
    console.log('conponentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return (
      <div>
        <Timer time={this.state.time} />

        <button
          onClick={() => {
            this.setState({ time: this.state.time + 10 })
          }}
        >
          change props
        </button>
      </div>
    )
  }
}

export default App
