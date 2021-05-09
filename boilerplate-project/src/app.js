'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render() {
    return (
      <div className="container" 
           onClick={(e) => alert('clicou')}>
        <Title />
      </div>
    )
  }
}

export default App
