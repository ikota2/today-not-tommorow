import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { TaskCategoryLabel } from "../TaskCategoryLabel/TaskCategoryLabel";
import { Form } from "../Form/form.js";
import "./task.css";

function formatDate(date) {
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
  return date.toLocaleString("en", options).toLowerCase();
}

export function Task({
  id,
  task,
  onChange,
  deleteTask,
  completeTask,
  date,
  option,
  done,
}) {
  const [edit, setEdit] = useState(false);
  function editTask() {
    setEdit(true);
  }
  function saveTask(obj) {
    const { task, option } = obj;
    onChange({ task, id, option });
    setEdit(false);
  }
  function handleDeleteTask() {
    deleteTask(id);
  }
  if (edit) {
    return (
      <Form
        defaultValue={task}
        onSubmit={saveTask}
        buttonText="save"
        defaultOption={option}
      />
    );
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
    <div className="task">
      <label htmlFor="task__checkboxId" />
      <input
        type="checkbox"
        checked={done}
        onChange={handleCompleteTask}
        className="task__checkbox"
        id="task__checkboxId"
      />
      <div className="task__outputAndDateWrapper">
        <span className="task__output">{task}</span>
        <span className="task__date">{formatDate(date)}</span>
        <TaskCategoryLabel categoryId={option} />
      </div>
      <div className="task__buttonsWrapper">
        <button
          type="button"
          className="task__edit"
          title="edit"
          onClick={editTask}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <button
          type="button"
          onClick={handleDeleteTask}
          title="delete"
          className="task__delete"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
