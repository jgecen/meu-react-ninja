'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'

/*
class App extends Component {
  constructor() {
    super()
    this.state = { color: 'red' }
  }

  render() {
    return (
      <div>
        <div>
          <Square key='1' color={this.state.color} />
          <Button handleClick={() => this.setState({ color: 'red' })}>
            Vermelho
          </Button>
          <Button handleClick={() => this.setState({ color: 'green' })}>
            Verde
          </Button>
          <Button handleClick={() => this.setState({ color: 'blue' })}>
            Azul
          </Button>
        </div>
        <div>
        <Square key='2' color={this.state.color} />


        </div>
      </div>
    )
  }
}
*/

class App extends Component {
  constructor() {
    super()
    this.state = { color: 'red' }
  }

  render() {
    return (
      <div>
        <Square key="1" color={this.state.color} />
        {['red', 'blue', 'green'].map((col) => (
          <Button key={col} handleClick={() => this.setState({ color: col })}>
            {col}
          </Button>
        ))}
      </div>
    )
  }
}

export default App
