import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditUser() {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [tech, setTech] = useState("");
  const navigate = useNavigate()

  
  const url = "http://localhost:3000/profile/"+id
  const getUserData = async () =>{
    let res = await fetch(url)
    res = await res.json()
    setName(res.name)
    setAge(res.age)
    setCity(res.city)
    setTech(res.tech)

  }
  useEffect(()=>{
    getUserData()
  },[])
  

  const updateUser = async () =>{
    console.log(name,age,city,tech)
    let res = await fetch(url, {
      method:'put',
      body:JSON.stringify({name,city,age,tech})
    })
    await res.json()
    // console.log(res)
    navigate('/customapi/')
    alert('data Updated')
    getUserData()
  }
  return (
    <>
      <div>
        <h1 className="text-2xl mb-4">Edit User</h1>

        <div className="my-5">
          <div className="flex gap-3 mt-5">
            <label className="min-w-20" htmlFor="name">
              Name
            </label>
            <input
              className="border px-2 py-1"
              onChange={(event) => setName(event.target.value)}
              type="text"
              name="name"
              id="name"
              value={name}
            />
          </div>
          <div className="flex gap-3 mt-5">
            <label className="min-w-20" htmlFor="age">
              Age
            </label>
            <input
              className="border px-2 py-1"
              onChange={(event) => setAge(event.target.value)}
              type="text"
              name="age"
              id="age"
              value={age}
            />
          </div>
          <div className="flex gap-3 mt-5">
            <label className="min-w-20" htmlFor="city">
              City
            </label>
            <input
              className="border px-2 py-1"
              onChange={(event) => setCity(event.target.value)}
              type="text"
              name="city"
              id="city"
              value={city}
            />
          </div>
          <div className="flex gap-3 mt-5">
            <label className="min-w-20" htmlFor="tech">
              Tech
            </label>
            <input
              className="border px-2 py-1"
              onChange={(event) => setTech(event.target.value)}
              type="text"
              name="tech"
              id="tech"
              value={tech}
            />
          </div>
          <div>
            <button
              className="bg-blue-200 hover:bg-blue-300 cursor-pointer py-2 px-5 mt-5"
              onClick={updateUser}
            >
              Edit User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
