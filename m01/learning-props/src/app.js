'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div>
        <Button><span>Texto1</span> Botão</Button>
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
