import React, { useState } from "react";
import { Form } from "../Form/form.js";

export function Task({ id, task, onChange, deleteTask }) {
  const [edit, setEdit] = useState(false);
  function editTask() {
    setEdit(true);
  }
  function saveTask(obj) {
    const task = obj.task;
    onChange({ task, id });
    setEdit(false);
  }
  function handleDeleteTask() {
    deleteTask(id);
  }
  if (edit) {
    return <Form defaultValue={task} onSubmit={saveTask} buttonText="save" />;
  }
  return (
    <div className="task__wrapper">
      <input type="checkbox" />
      <span className="todayList__output">{task}</span>
      <button type="button" className="todayList__edit" onClick={editTask}>
        edit
      </button>
      {/* <button type="button" className="todayList__complete">
        complete
      </button> */}
      <button
        type="button"
        onClick={handleDeleteTask}
        className="todayList__delete"
      >
        delete
      </button>
    </div>
  );
}
