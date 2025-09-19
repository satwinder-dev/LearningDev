import React from "react";
import { Student } from "./Student";

export const ClassComp = () => {
  return (
    <>
      <div className="p-5 bg-red-400 m-5">
        <h1 className="text-2xl">Class Component</h1>
        <Student/>
      </div>
    </>
  );
};
