import React from "react";
import Header from "../other/Header";
import CreatTask from "../other/CreatTask";

export default function AdminDashboard(props) {
  return (
    <div>
      <div>
        <Header changeUser = {props.changeUser}/>
      </div>
      <CreatTask/>
    </div>
  );
}
