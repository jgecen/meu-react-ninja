'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='Gecen' lastname={{first: 'Dacome', last: 'De Marchi'}} />
      </div>
    )
  }
}

export default App
