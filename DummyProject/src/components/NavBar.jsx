import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p-4 fixed w-full z-50 top-0 backdrop-blur-xl bg-white/80">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link to={""}>
            <img
              className="w-6"
              src="http://logobook.com/wp-content/uploads/2017/01/Scripta_61_logo.svg"
              alt="logo"
            />
          </Link>
          {open ? (
            <div>
              <div className="h-full flex justify-center items-center gap-10 uppercase navv-menu">
                <NavLink
                  className="hover:opacity-80 transition-all ease-in-out duration-200 "
                  to={"/"}
                >
                  HOME
                </NavLink>
                <NavLink
                  className="hover:opacity-80 transition-all ease-in-out duration-200 "
                  to={"about"}
                >
                  ABOUT
                </NavLink>
                <NavLink
                  className="hover:opacity-80 transition-all ease-in-out duration-200 "
                  to={"contact"}
                >
                  CONTACT
                </NavLink>
                <NavLink
                  className="hover:opacity-80 transition-all ease-in-out duration-200 "
                  to={"project"}
                >
                  PROJECT
                </NavLink>
                <NavLink
                  className="hover:opacity-80 transition-all ease-in-out duration-200 "
                  to={"User"}
                >
                  USERS
                </NavLink>
                <NavLink
                  className="hover:opacity-80 transition-all ease-in-out duration-200 "
                  to={"products"}
                >
                  Products
                </NavLink>
                <NavLink
                  className="hover:opacity-80 transition-all ease-in-out duration-200 "
                  to={"peoples"}
                >
                  People
                </NavLink>
                <NavLink
                  className="hover:opacity-80 transition-all ease-in-out duration-200 "
                  to={"customapi"}
                >
                  Custom API
                </NavLink>
              </div>
            </div>
          ) : null}
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
                className="size-5"
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
                stroke="currentcolor"
                className="size-5"
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
    </>
  );
};

export default NavBar;
