import React from "react";
import { College } from "./College";

export const ContextApi = () => {
  return (
    <>
      <div className="p-5 bg-red-200 m-5 text-white">
        <h1 className="text-2xl">Context Api</h1>
        <College />
      </div>
    </>
  );
};
