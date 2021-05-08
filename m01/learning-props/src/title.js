'use strict'

import React from 'react'

const Title = ({name, lastname}) => (
  <h1>
    Ola {`${name} ${lastname}`}
  </h1>
)

Title.defaultProps = {
  name: 'NAME',
  lastname: 'LAST'
}

/*
const Title = React.createClass({
  getDefaultProps: () => {
    return {
      name: 'NAME',
      lastname: {
        first: 'FIRST',
        last: 'LAST'
      }
    }
  },

  render: function () {
    return (
      <h1>{this.props.name} {this.props.lastname.first} {this.props.lastname.last}</h1>
    )
  }
})
*/
export default Title
