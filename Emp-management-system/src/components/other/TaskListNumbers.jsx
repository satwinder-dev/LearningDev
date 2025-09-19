import React from "react";

export default function TaskListNumbers({data}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 border border-white">
          <p className="text-2xl">{data.taskNumbers.newTask}</p>
          <p className="text-xl text-blue-300">New Task</p>
        </div>
        <div className="p-4 border border-white">
          <p className="text-2xl">{data.taskNumbers.completed}</p>
          <p className="text-xl text-green-300">Completed Task</p>
        </div>
        <div className="p-4 border border-white">
          <p className="text-2xl">{data.taskNumbers.active}</p>
          <p className="text-xl text-yellow-300">Accepted Task</p>
        </div>
        <div className="p-4 border border-white">
          <p className="text-2xl">{data.taskNumbers.failed}</p>
          <p className="text-xl text-red-300">Failed Task</p>
        </div>
      </div>
    </>
  );
}
