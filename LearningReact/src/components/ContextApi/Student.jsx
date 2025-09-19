import React from "react";
import { Subject } from "./Subject";

export const Student = () => {
  return (
    <>
      <div className="p-5 bg-red-500 m-5">
        <h1 className="text-2xl">Student Component</h1>
        <Subject/>
      </div>
    </>
  );
};
