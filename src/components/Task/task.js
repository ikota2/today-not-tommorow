import React, { useState } from "react";
import { Form } from "../Form/form.js";

export function Task({ task }) {
  const [edit, setEdit] = useState(false);
  function editTask(event) {
    event.preventDefault();
    setEdit((prev) => !prev);
  }
  if (edit) {
    return <Form defaultValue={task} onSubmit={console.log} />;
  }
  return (
    <div className="task__wrapper">
      <span className="todayList__output">{task}</span>
      <button type="button" className="todayList__edit" onClick={editTask}>
        edit
      </button>
      <button type="button" className="todayList__complete">
        complete
      </button>
      <button type="button" className="todayList__delete">
        delete
      </button>
    </div>
  );
}
