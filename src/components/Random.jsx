import React from 'react'

function Random({min, max}) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min
  return (
    <div>{num}</div>
  )
}

export default Random