import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

export default function EmployeeDashboard(props) {
  return (
    <div className="">
      <div>
        <Header changeUser={props.changeUser} data={props.data} />
      </div>
      <div className="flex flex-col gap-4">
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </div>
  );
}
