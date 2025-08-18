import React, { useEffect, useState } from "react";

export default function Peoples() {
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const url = "https://dummyjson.com/users";
    let res = await fetch(url);
    res = await res.json();
    setUserData(res.users);
    console.log(res);
  }

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col py-20">
      <h1 className="text-3xl mb-4">Peoples</h1>
      {userdata.map((item) => (
        <div key={item.id} className="flex ">
          <h1 className="w-24">{item.firstName}</h1>
          <h1 className="w-24">{item.maidenName}</h1>
          <h1 className="w-24">{item.lastName}</h1>
          <h1 className="w-24">{item.age}</h1>
          <h1 className="w-44">{item.address.address}</h1>
          <h1 className="w-24">{item.address.city}</h1>
          <h1 className="w-44">{item.address.state}</h1>
          <h1 className="w-44">{item.birthDate}</h1>
          <h1 className="w-44">{item.bank.currency}</h1>
          
        </div>
      ))}
    </div>
  );
}
