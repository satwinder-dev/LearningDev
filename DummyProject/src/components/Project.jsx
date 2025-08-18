import React from "react";
import { NavLink, Outlet } from "react-router";

export default function Project() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto flex flex-col py-20 px-4">
        <h1 className="text-2xl">Project</h1>
        <div className="flex my-3 gap-5 project">
          <NavLink className='px-4 py-2 rounded-full' to="appone">App One</NavLink>
          <NavLink className='px-4 py-2 rounded-full' to={"apptwo"}>App Two</NavLink>
          <NavLink className='px-4 py-2 rounded-full' to={"appthree"}>App Three</NavLink>
          <NavLink className='px-4 py-2 rounded-full' to={"appfour"}>App Four</NavLink>
        </div>
        <div className="border h-96 my-3 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}
