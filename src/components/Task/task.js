import React, { useState } from "react";
import "./task.css";
import { Form } from "../Form/form.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faPenAlt } from "@fortawesome/free-solid-svg-icons";

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

export function Task({
  id,
  task,
  onChange,
  deleteTask,
  completeTask,
  date,
  option,
}) {
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
  const workStyle = {
    backgroundColor: "gray",
  };
  const educationStyle = {
    backgroundColor: "black",
  };
  const homeStyle = {
    backgroundColor: "rgba(68, 32, 196, 0.767)",
  };
  const shoppingStyle = {
    backgroundColor: "crimson",
  };
  const entertainmentStyle = {
    background:
      "linear-gradient(to bottom, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%)",
  };
  const healthStyle = {
    backgroundColor: "green",
  };
  const defaultStyle = {
    display: "none",
  };
  const optionStyle =
    option === "work"
      ? workStyle
      : option === "education"
      ? educationStyle
      : option === "home"
      ? homeStyle
      : option === "shopping"
      ? shoppingStyle
      : option === "entertainment"
      ? entertainmentStyle
      : option === "health"
      ? healthStyle
      : defaultStyle;
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
        <span className="task__date">{date.toLocaleString("en", options)}</span>
        <div className="task__option" style={optionStyle}>
          {option}
        </div>
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
