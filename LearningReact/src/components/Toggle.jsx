import React, { useState } from 'react'

const Toggle = () => {

const [toggle,setToggle] =useState(true)

  return (
    <div>

      <button onClick={()=>{setToggle(!toggle)}}>Toggle {toggle ? "On" : "Off"}</button>

      {
        toggle ? <h4>Satwinder Singh</h4> : null
      }
    </div>
  )
}

export default Toggle