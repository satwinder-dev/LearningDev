import React from "react";
import { Link, Outlet } from "react-router";

export default function Users() {
  const users = [
    {
      id: 1,
      name: "Satwinder",
      color: "red",
    },
    {
      id: 2,
      name: "Prakhar",
      color: "blue",
    },
    {
      id: 3,
      name: "Abhishek",
      color: "green",
    },
    {
      id: 4,
      name: "Sheru",
      color: "purple",
    },
  ];

  return (
    <>
      <div className="max-w-[1400px] mx-auto flex flex-col py-20 px-4">
        <h1 className="text-2xl">USers</h1>
        <div className="flex my-3 gap-5">
          {users.map((items) => (
            <Link key={items.id} to={`${items.color}`}>
              {items.name}
            </Link>
          ))}
        </div>
        <div className="border h-96 my-3 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}
