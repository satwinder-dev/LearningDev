import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(0);
    const [color,setColor] =useState("red")
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <div style={{backgroundColor:`${color}`}} className=" flex flex-col justify-center items-center ">
        <h1 className="font-bold" style={{ fontSize: '10vw', opacity: 0.09 }}>
          {time}
        </h1>
      </div>
        <div className="text-end">
          <select onChange={(event)=>{setColor(event.target.value)}}>
            <option value={"red"}>Red</option>
            <option value={"blue"}>Blue</option>
            <option value={"green"}>Green</option>
            <option value={"orange"}>Orange</option>
            <option value={"yellow"}>Yellow</option>
            <option value={"purple"}>Purple</option>
            <option value={"gray"}>Gray</option>
          </select>
        </div>
    </>
  );
};

export default Clock;
