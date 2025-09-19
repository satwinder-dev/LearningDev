import React, { useState } from 'react'

const UseState = () => {
    const [fruit,setfruit]= useState("banananana")

    const handlefruit = ()=>{
        setfruit("apple")
    }

    const [count,setcount]=useState(0)
    
    const handlecount =()=>{
        setcount(count+1)
    }
  return (
    <div>
        <h3>{fruit}</h3>
        <button onClick={handlefruit}>Change</button>

        <div>
            <h3>Counter: {2**count}</h3>
            <button onClick={handlecount}>Counter {count}</button>
        </div>

        <div>
            <h3>Mutiple Conditions</h3>
            
            {
                count==0?"Count0"
                :count==1?"Count1"
                :count==2?"Count2"
                :count==3?"Count3"
                :count==4?"Count4"
                :count==5?"Count5"
                :count==6?"Count6":"Other"
            }

        </div>
    </div>
  )
}

export default UseState