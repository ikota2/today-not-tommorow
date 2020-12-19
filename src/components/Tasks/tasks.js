import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodayList } from "../TodayList/todayList.js";
import { Form } from "../Form/form.js";

export function Tasks() {
  const [tasks, setTasks] = useState([]);

  function addTask(data) {
    const { task, option } = data;

    const record = {
      sentense: task,
      option: option,
      id: uuidv4(),
      done: false,
      date: new Date(),
    };
    console.log(record);
    setTasks((prev) => [...prev, record]);
  }

  // how to complete?)
  function completeTask(smth) {
    console.log(smth); // smth это id
    setTasks((prev) => prev.map((task) => ({ ...task, done: !task.done })));
  }

  // option в edit не сэйвитса
  function editTask(data) {
    // const { task } = data;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === data.id
          ? { ...task, sentense: data.task, option: data.option }
          : task
      )
    );

    console.log(data);
    // console.log(tasks);
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
