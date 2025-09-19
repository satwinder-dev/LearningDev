import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function AllTasks() {
  const [userData] = useContext(AuthContext); 

  return (
    <div className="flex flex-col gap-4 h-90 !overflow-auto  mt-10">
      <div className="flex items-center justify-between gap-4 pe-2">
        <p className="min-w-30 w-full border p-4">Name</p>
        <p className="border w-full p-4 min-w-20 text-blue-300">New Task</p>
        <p className="border w-full p-4 min-w-20 text-yellow-300">Active</p>
        <p className="border w-full p-4 min-w-20 text-green-300">Completed</p>
        <p className="border w-full p-4 min-w-20 text-red-300">Failed</p>
      </div>
       <div className="flex flex-col gap-4 h-90 !overflow-auto pe-2">
        {userData.map((item,idx) => (
          <div key={idx} className="flex items-center justify-between gap-4">
            <p className="text-white/70 border w-full p-4">{item.firstName}</p>
            <p className="text-blue-300/70 border w-full p-4">{item.taskNumbers.newTask}</p>
            <p className="text-yellow-300/70 border w-full p-4">{item.taskNumbers.active}</p>
            <p className="text-green-300/70 border w-full p-4">{item.taskNumbers.completed}</p>
            <p className="text-red-300/70 border w-full p-4">{item.taskNumbers.failed}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
