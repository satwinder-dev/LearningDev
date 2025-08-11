import React from "react";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p-4 fixed w-full z-50 top-0">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <img
            className="w-8"
            src="http://logobook.com/wp-content/uploads/2017/01/Scripta_61_logo.svg"
            alt="logo"
            style={{
                filter: open ? ("invert(1)"): ("invert(0)")
            }}
          />

          <button
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {!open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open ? (
        <div className="bg-black h-screen">
          <div className="h-full flex justify-center items-center gap-16 flex-col text-white text-6xl">
            <a className="hover:italic transition-all ease-in-out duration-200 " href="">HOME</a>
            <a className="hover:italic transition-all ease-in-out duration-200 " href="">ABOUT</a>
            <a className="hover:italic transition-all ease-in-out duration-200 " href="">CONTACT</a>
            <a className="hover:italic transition-all ease-in-out duration-200 " href="">PROJECT</a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
