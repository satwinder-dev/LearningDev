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
            className="border py-1 px-3 cursor-pointer !m-0"
            onClick={() => setCount(count + 1)}
          >
            Number {count}
          </button>
          <button className="border py-1 px-3 cursor-pointer !m-0" onClick={handle}>
            Square
          </button>
          <input ref={inputRef} type="text" className="border px-4 rounded-4xl" />
        </div>
       
      </div>
    </>
  );
};

export default UseRef;
