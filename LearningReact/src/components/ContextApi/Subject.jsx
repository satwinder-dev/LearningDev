import React, { useContext } from "react";
import { SubjectContext } from "./ContextData";

export const Subject = () => {
    const subject =useContext(SubjectContext)
  return (
    <>
      <div className="p-5 bg-red-600 m-5">
        <h1 className="text-2xl">Subject Component : {subject}</h1>
   
      </div>
    </>
  );
};
