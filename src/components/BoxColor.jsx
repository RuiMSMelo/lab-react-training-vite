import React from 'react'

function BoxColor({r, g, b}) {
    const color = r+','+g+','+b
  return (
    <div>rgb({color})</div>
  )
}

export default BoxColor