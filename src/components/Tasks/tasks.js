import React, { useState } from "react";
import "./tasks.css";
import { TodayList } from "../TodayList/todayList.js";
import { Form } from "../Form/form.js";
import { v4 as uuidv4 } from "uuid";

export function Tasks() {
  const [tasks, setTasks] = useState([]);
  function addTask(data) {
    const { task } = data;
    const record = { sentense: task, id: uuidv4() };
    setTasks((prev) => [...prev, record]);
  }
  function editTask(data) {
    const { task } = data;
  }
  return (
    <>
      <Form onSubmit={addTask} />
      <TodayList tasks={tasks} />
    </>
  );
}
