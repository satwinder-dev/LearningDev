import React from "react";

export default function FailedTask({data}) {
  return (
    <div>
      <div className="p-4 border border-white flex flex-col gap-4 h-full justify-between">
         <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="bg-red-600 w-fit py-1 px-2 text-sm rounded">
              {data.category}
            </div>
            <div className=" w-fit p-1">{data.date}</div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl ">{data.title} </p>
            <p className="text-justify">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 flex-col">
          <button className="cursor-pointer px-4 py-2 w-full border text-red-300">
            Failed
          </button>
        </div>
      </div>
    </div>
  );
}
