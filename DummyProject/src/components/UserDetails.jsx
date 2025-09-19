import React from "react";
import { useParams } from "react-router";

export default function UserDetails() {
  const paramsData = useParams();

  return (
    <div
      className={`max-w-[1400px] mx-auto flex flex-col p-4 bg-${paramsData.color}-300 h-full`}
    >
      <div className="flex flex-col gap-4">
        {/* <p>User Details of User color</p> */}
        <p className="text-9xl uppercase text-center my-20 font-bold opacity-5 ">{paramsData.color}</p>
      </div>
    </div>
  );
}
