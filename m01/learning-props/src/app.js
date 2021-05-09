'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
class App extends Component {
  render () {
    return (
      <div>
        <LikeButton />
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
