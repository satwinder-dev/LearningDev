import React from "react";
import AllTasks from "./AllTasks";

export default function CreatTask() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <input
            className="p-4 border border-white w-full outline-0"
            type="text"
            placeholder="Task Title"
          />
          <input
            className="p-4 border border-white w-full outline-0"
            type="date"
            placeholder="Date"
          />
          <input
            className="p-4 border border-white w-full outline-0"
            type="text"
            placeholder="Assign To"
          />
          <input
            className="p-4 border border-white w-full outline-0"
            type="text"
            placeholder="Category"
          />
        </div>
        <div className="h-full flex flex-col gap-4">
          <textarea
            className="p-4 border border-white w-full h-full outline-0"
            placeholder="Description"
          />
          <button className="p-4 border border-green-300 w-full text-green-300 cursor-pointer">
            Create Task
          </button>
        </div>
      </div>

      <AllTasks/>
    </div>
  );
}
