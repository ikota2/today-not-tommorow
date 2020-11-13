import React, { useState } from "react";
import { TodayList } from "../TodayList/todayList.js";
import { Form } from "../Form/form.js";
import { v4 as uuidv4 } from "uuid";

export function Tasks() {
  const [tasks, setTasks] = useState([]);
  function addTask(data) {
    const { task } = data;

    const options = {
      year: "numeric",
      month: "short",
      week: "numeric",
      day: "numeric",
      weekday: "long",
      timezone: "UTC",
      hour: "numeric",
      minute: "numeric",
    };
    const record = {
      sentense: task,
      id: uuidv4(),
      done: false,
      date: new Date().toLocaleString("en", options),
    };
    setTasks((prev) => [...prev, record]);
    // setTasks((prev) =>
    //   record.sentense === "" ? alert("type smth") : [...prev, record]
    // );
  }

  function completeTask(smth) {
    console.log(smth); // smth это id
    setTasks((prev) =>
      prev.filter((task) =>
        task.done === true ? { ...task, done: true } : task
      )
    );
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
      <TodayList
        tasks={tasks}
        onChange={editTask}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </>
  );
}
