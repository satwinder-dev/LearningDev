import React, { useContext, useState } from "react";
import AllTasks from "./AllTasks";
import { AuthContext } from "../../context/AuthProvider";

export default function CreatTask() {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTeskTitle] = useState("");
  const [description, setTeskDescription] = useState("");
  const [date, setDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Task Completed");

    const tasksObj = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userData;

    console.log(data);
    data.forEach(function (items) {
      if (asignTo === items.firstName) {
        items.tasks.push(tasksObj);
        items.taskNumbers.newTask += 1;
      }
    });
    setUserData(data);
  };

  // console.log(task)

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="flex flex-col gap-4">
          <input
            className="p-4 border border-white w-full outline-0"
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTeskTitle(e.target.value)}
          />
          <input
            className="p-4 border border-white w-full outline-0"
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className="p-4 border border-white w-full outline-0"
            type="text"
            placeholder="Assign To"
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
          />
          <input
            className="p-4 border border-white w-full outline-0"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="h-full flex flex-col gap-4">
          <textarea
            className="p-4 border border-white w-full h-full outline-0"
            placeholder="Description"
            value={description}
            onChange={(e) => setTeskDescription(e.target.value)}
          />
          <button className="p-4 border border-green-300 w-full text-green-300 cursor-pointer">
            Create Task
          </button>
        </div>
      </form>

      <AllTasks />
    </div>
  );
}
