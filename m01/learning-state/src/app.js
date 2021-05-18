'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
  constructor() {
    super()
    this.state = { showTimer: true }
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
        {this.state.showTimer && <Timer />}
        <button onClick={ () =>{
          this.setState({showTimer: !this.state.showTimer})
        }} >show/hide</button>
      </div>
    )
  }
}

export default App
