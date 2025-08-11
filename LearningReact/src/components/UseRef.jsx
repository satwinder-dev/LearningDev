import React, { useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  var sq = count * count;
  const handle = () => {
    inputRef.current.focus();
    inputRef.current.value = sq;
  };
  return (
    <>
      <div className="relative">
        <h1 className="text-3xl">UseRef</h1>
        <div className="my-4 flex gap-2">
          <button
            className="border py-1 px-3 cursor-pointer"
            onClick={() => setCount(count + 1)}
          >
            Number {count}
          </button>
          <button className="border py-1 px-3 cursor-pointer" onClick={handle}>
            Square
          </button>
          <input ref={inputRef} type="text" className="border p-1" />
        </div>
       
      </div>
    </>
  );
};

export default UseRef;
