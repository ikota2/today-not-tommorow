import React, { useState } from "react";
import "./tasks.css";
import { TodayList } from "../TodayList/todayList.js";
import { Form } from "../Form/form.js";
import { v4 as uuidv4 } from "uuid";

export function Tasks() {
  const [tasks, setTasks] = useState([]);
  function addTask(data) {
    const { task } = data;
    const record = { sentense: task, id: uuidv4(), done: false };
    setTasks((prev) => [...prev, record]);
  }

  function editTask(data) {
    // const { task } = data;
    console.log(data);
    setTasks((prev) =>
      prev.map((task) =>
        task.id === data.id ? { ...task, sentense: data.task } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <>
      <Form onSubmit={addTask} buttonText={"add"} />
      <TodayList tasks={tasks} onChange={editTask} deleteTask={deleteTask} />
    </>
  );
}
