'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div
        className='container'
        onClick={(e) => {
          alert('Clicou')
        }}
      >
        <Square />
      </div>
    )
  }
}
/*
const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Gecen' lastname='De Marchi' />
      </div>
    )
  }
})
*/
export default App
