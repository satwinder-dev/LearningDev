import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

export default function EmployeeDashboard({ data }) {
  return (
    <div className="">
      <div>
        <Header data={data} />
      </div>
      <div className="flex flex-col gap-4">
        <TaskListNumbers data={data}/>
        <TaskList/>
      </div>
    </div>
  );
}
