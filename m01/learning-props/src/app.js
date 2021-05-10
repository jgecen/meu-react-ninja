'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = { text: 'Minha app' }
  }
  /*
  render() {
    return (
      <div
        className="container"
        onClick={() => {
          this.setState({ text: 'My App' })
        }}
      >
        {this.state.text}
      </div>
    )
  }
  */
 //1 render sem arrow functions 
 /*
  render() {
    const self = this;
    return (
      <div
        className="container"
        onClick={function() {
          self.setState({ text: 'My App' })
        }}
      >
        {self.state.text}
      </div>
    )
  }
  */
 //2 formato usando bind
  render() {
    return (
      <div
        className="container"
        onClick={function() {
          this.setState({ text: 'My App' })
        }.bind(this)}
      >
        {this.state.text}
      </div>
    )
  }

}

export default App
