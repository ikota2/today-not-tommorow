import React, { useState } from "react";
import "./form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Snackbar from "@material-ui/core/Snackbar";

export function Form({ onSubmit, defaultValue = "" }) {
  const [task, setTask] = useState(defaultValue);
  const [emptyInput, setEmptyInput] = useState(false);
  const [option, setOption] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSelectChange(event) {
    setOption(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (task === "") {
      setEmptyInput(true);
      return;
    }
    onSubmit({ task, option });

    setTask("");
  }

  return (
    <div className="form__wrapper">
      <form className="form__form" onSubmit={handleSubmit}>
        <div className="form__inputAndSelectWrapper">
          <input
            type="text"
            value={task}
            className="form__input"
            onChange={handleChange}
            maxLength="60"
          />
          <select
            className="form__select"
            value={option}
            onChange={handleSelectChange}
          >
            <option value="default" className="form__option">
              no category
            </option>
            <option value="home">home</option>
            <option value="work">work</option>
            <option value="education">education</option>
            <option value="shopping">shopping</option>
            <option value="entertainment">entertainment</option>
            <option value="health">health</option>
          </select>
        </div>
        <button type="submit" className="form__approveButton">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
      <Snackbar
        open={emptyInput}
        autoHideDuration={6000}
        onClose={() => setEmptyInput(false)}
        message="type a task"
      ></Snackbar>
    </div>
  );
}
