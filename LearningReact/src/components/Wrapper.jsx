import React from 'react'

const Wrapper = ({children,color='green'}) => {
  return (
    <div>
        <h1 style={{
            border:`2px solid ${color}`,
            color:color,
            fontWeight:100,
            padding:10,
            margin:20
        }}>{children}</h1>
    </div>
  )
}

export default Wrapper