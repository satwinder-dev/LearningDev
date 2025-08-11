import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  function call() {
    // console.log("call Function");
  }

  useEffect(() => {
    call();
  }, []);

  return (
    <>
      <button
        style={{ borderRadius: count * 2 }}
        className="border p-10 w-30 h-30 m-10 text-2xl"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </>
  );
};

export default UseEffect;
