import React, { useState } from "react";
import "./task.css";
import { Form } from "../Form/form.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faPenAlt } from "@fortawesome/free-solid-svg-icons";

export function Task({ id, task, onChange, deleteTask, completeTask, date }) {
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
  function handleCompleteTask() {
    completeTask(id);
  }
  return (
    <div className="task__wrapper">
      <label htmlFor="task__checkboxId" />
      <input
        type="checkbox"
        onChange={handleCompleteTask}
        className="task__checkbox"
        id="task__checkboxId"
      />
      <div className="task__outputAndDateWrapper">
        <span className="task__output">{task}</span>
        <span className="task__date">{date}</span>
      </div>
      <div className="task__buttonsWrapper">
        <button type="button" className="task__edit" onClick={editTask}>
          <FontAwesomeIcon icon={faPenAlt} />
        </button>
        <button
          type="button"
          onClick={handleDeleteTask}
          className="task__delete"
        >
          <FontAwesomeIcon icon={faEraser} />
        </button>
      </div>
    </div>
  );
}
