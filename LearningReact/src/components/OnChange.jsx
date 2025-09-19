import React, { useState } from 'react'

const OnChange = () => {
    const [val,setVal] =useState("Satwinder")
  return (
    <div>
        <h5>Get input value</h5>

        <input value={val} type="text" onChange={(event)=>{setVal(event.target.value)}}/>
        

        <h1 style={{fontWeight:100}}>{val}</h1>

        <button onClick={()=>setVal("")}>Clear</button>
    </div>
  )
}

export default OnChange