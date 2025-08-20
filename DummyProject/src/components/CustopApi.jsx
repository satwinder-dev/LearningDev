import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { Outlet, useNavigate } from "react-router";

export default function CustopApi() {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState([]);
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [tech, setTech] = useState("");

  const url = "http://localhost:3000/profile";
  async function getUserData() {
    let res = await fetch(url);
    res = await res.json();
    setUserdata(res);
    setLoader(false);
  }

  useEffect(() => {
    setLoader(true);
    getUserData();
  }, []);

  const deleteUser = async (id) => {
    let res = await fetch(url + "/" + id, { method: "delete" });
    await res.json();
    // alert('User deleted')
    getUserData();
  };

  const createUser = async () => {
    // console.log(name, city, age, tech);

    let res = await fetch(url, {
      method: "post",
      body: JSON.stringify({ name, age, city, tech }),
    });
    await res.json();

    getUserData();
    setName("");
    setAge("");
    setCity("");
    setTech("");
  };

  const editUser = (id) => {
    navigate(id);
  };
  return (
    <div className="max-w-[1400px] mx-auto flex flex-col py-20 px-4">
      <div className="flex gap-3 mt-5 items-center">
        <h1 className="text-2xl min-w-52">Custom API</h1>
       
      </div>
      <div className="flex gap-3 mt-5">
        <div className="min-w-52 bg-gray-300 p-3">ID</div>
        <div className="min-w-52 bg-gray-300 p-3">Name</div>
        <div className="min-w-52 bg-gray-300 p-3">Age</div>
        <div className="min-w-52 bg-gray-300 p-3">City</div>
        <div className="min-w-52 bg-gray-300 p-3">Tech</div>
        <div className="min-w-52 bg-gray-300 p-3 text-center">Action</div>
      </div>
      <div className="flex gap-3 mt-4">
        <div className="min-w-52 bg-gray-200 p-3">ID</div>
        <input
          className="min-w-52 bg-gray-200 p-3 focus:bg-gray-300"
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          value={name}
        />
        <input
          className="min-w-52 bg-gray-200 p-3 focus:bg-gray-300"
          onChange={(event) => setAge(event.target.value)}
          placeholder="Age"
          type="number"
          value={age}
        />
        <input
          className="min-w-52 bg-gray-200 p-3 focus:bg-gray-300"
          onChange={(event) => setCity(event.target.value)}
          placeholder="City"
          value={city}
        />
        <input
          className="min-w-52 bg-gray-200 p-3 focus:bg-gray-300"
          onChange={(event) => setTech(event.target.value)}
          placeholder="Tech"
          value={tech}
        />
        <button
          onClick={createUser}
          className="bg-green-200 hover:bg-green-300 cursor-pointer p-3 min-w-52"
        >
          Add User
        </button>
      </div>
      {!loader ? (
        userdata.map((item) => (
          <div key={item.id} className="flex gap-3 mt-3 ">
            <div className="min-w-52 bg-gray-200 hover:bg-gray-300 p-3">
              {item.id}
            </div>
            <div className="min-w-52 bg-gray-200 hover:bg-gray-300 p-3">
              {item.name}
            </div>
            <div className="min-w-52 bg-gray-200 hover:bg-gray-300 p-3">
              {item.age}
            </div>
            <div className="min-w-52 bg-gray-200 hover:bg-gray-300 p-3">
              {item.city}
            </div>
            <div className="min-w-52 bg-gray-200 hover:bg-gray-300 p-3">
              {item.tech}
            </div>
            <button
              onClick={() => deleteUser(item.id)}
              className="min-w-25 bg-red-200 hover:bg-red-300 p-3 cursor-pointer"
            >
              Delete
            </button>
            <button
              onClick={() => editUser(item.id)}
              className="min-w-24 bg-blue-200 hover:bg-blue-300 p-3 cursor-pointer"
            >
              Edit
            </button>
          </div>
        ))
      ) : (
        <div className="h-full flex justify-center items-center py-20">
          <Loader />
        </div>
      )}

      <div className="flex gap-20 mt-5">
        <div className="mt-5">
          {/* <AddUser /> */}
          <div>
            <h1 className="text-2xl">Add New User</h1>

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
                  type="number"
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
                  onClick={createUser}
                  className="bg-green-200 hover:bg-green-300 cursor-pointer py-2 px-5 mt-5"
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Edit User */}
        <div className="mt-5">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
