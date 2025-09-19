import React, { useState } from "react";

export default function Login({handleLogin}) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submithandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    // console.log("form submitted");
    // console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-7 min-w-2xs">
        <h1 className="text-center text-3xl">Log In</h1>
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-col gap-4"
        >
          <input
            required
            placeholder="Enter Email"
            type="email"
            className="border border-white p-3 outline-0"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            autoComplete="email"
          />
          <input
            required
            placeholder="Enter PassWord"
            type="password"
            className="border border-white p-3 outline-0"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
            autoComplete="current-password"
          />
          <button className="border border-white p-3 w-full cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
