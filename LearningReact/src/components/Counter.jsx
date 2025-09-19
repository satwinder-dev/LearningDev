import React, { useEffect } from 'react'

const Counter = ({counts}) => {
    const handleCounter = () =>{
        // console.log("handle counter ")
    }
    useEffect(()=>{
        handleCounter()
    },[])
    return (
    <div>
        <h1>counter Counts : {counts}</h1>
        {/* <h1>Data Counts : {data}</h1> */}
    </div>
  )
}

export default Counter