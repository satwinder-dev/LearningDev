import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p-4 fixed w-full z-50 top-0 bg-transparent">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link to={''}>
            <img
              className="w-8"
              src="http://logobook.com/wp-content/uploads/2017/01/Scripta_61_logo.svg"
              alt="logo"
              style={{
                filter: open ? "invert(1)" : "invert(0)",
              }}
            />
          </Link>

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
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open ? (
        <div className="bg-black/20 h-screen absolute top-0 z-40 w-full backdrop-blur-3xl navv-menu">
          <div className="h-full flex justify-center items-center gap-16 flex-col text-white text-6xl uppercase">
            <NavLink
              className="hover:opacity-80 transition-all ease-in-out duration-200 "
              to={"/"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              HOME
            </NavLink>
            <NavLink
              className="hover:opacity-80 transition-all ease-in-out duration-200 "
              to={"about"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              ABOUT
            </NavLink>
            <NavLink
              className="hover:opacity-80 transition-all ease-in-out duration-200 "
              to={"contact"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              CONTACT
            </NavLink>
            <NavLink
              className="hover:opacity-80 transition-all ease-in-out duration-200 "
              to={"project"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              PROJECT
            </NavLink>
            <NavLink
              className="hover:opacity-80 transition-all ease-in-out duration-200 "
              to={"User"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              USERS
            </NavLink>
            <NavLink
              className="hover:opacity-80 transition-all ease-in-out duration-200 "
              to={"products"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              Products
            </NavLink>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
