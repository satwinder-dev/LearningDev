import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

export default function TaskList({ data }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {/* <AcceptTask/>
        <NewTask/>
        <CompleteTask/>
        <FailedTask/> */}

        {data.tasks.map((item,idx) => {
          if (item.active) {
            return <AcceptTask key={idx} data={item}/>;
          }
          if (item.newTask){
            return <NewTask key={idx} data={item}/>
          }
          if (item.completed){
            return <CompleteTask key={idx} data={item}/>
          }
          if (item.failed){
            return <FailedTask key={idx} data={item}/>
          }
        })}
      </div>
    </>
  );
}
