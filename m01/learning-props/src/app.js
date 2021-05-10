'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = { text: 'Minha app' }
  }

  render() {
    return (
         <div className='container' onClick={() => { this.setState({text: 'My App'})}} > 
           {this.state.text}
         </div>)
  }
}

export default App
