import React, { useEffect, useState } from "react";

export default function Header(props) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (props.data && props.data.firstName) {
      setUserName(props.data.firstName);
    } else {
      setUserName("Admin");
    }
  }, [props.data]);

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }
  return (
    <div className="flex items-center justify-between py-10">
      <p className="text-3xl font-semibold">
        Hi, <span className="text-white/60">{userName}</span>
      </p>
      <button onClick={logOutUser} className=" border border-white px-2 py-1 cursor-pointer">
        Log Out
      </button>
    </div>
  );
}
