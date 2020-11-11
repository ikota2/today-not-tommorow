import React, { useState } from "react";

export function Form({ onSubmit, defaultValue = "", buttonText }) {
  const [task, setTask] = useState(defaultValue);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    setTask("");
    event.preventDefault();
    onSubmit({ task });
  }

  return (
    <div className="form__wrapper">
      <form className="form__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          className="form__input"
          onChange={handleChange}
        />
        <button type="submit" className="form__approveButton">
          {buttonText}
        </button>
      </form>
    </div>
  );
}
