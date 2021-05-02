'use strict'

import React from 'react'

const Square = ({ color }) => (
  <div style={{
    backgroundColor: color,
    height: '110px',
    width: '110px'
  }} />
)

Square.defaultProps = {
  color: 'red'
}

export default Square
