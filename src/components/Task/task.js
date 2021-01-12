import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { TaskCategoryLabel } from "../TaskCategoryLabel/TaskCategoryLabel";
import EditTask from "../EditTask/EditTask";
import { Form } from "../Form/form.js";
import "./task.css";
import { REMOVE_TASK, TOGGLE_TASK } from "../../redux/tasks/types";

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

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleDeleteTask: () => {
      dispatch({
        type: REMOVE_TASK,
        id: ownProps.id,
      });
    },
    handleCompleteTask: () => {
      dispatch({
        type: TOGGLE_TASK,
        id: ownProps.id,
      });
    },
  };
}

export const Task = connect(null, mapDispatchToProps)(Task_);
function Task_({
  id,
  task,
  date,
  option,
  done,
  handleDeleteTask,
  handleCompleteTask,
}) {
  const [edit, setEdit] = useState(false);
  const handleClose = () => setEdit(false);

  if (edit) {
    return <EditTask id={id} onClose={handleClose} />;
  }

  return (
    <div className='task'>
      <label htmlFor='task__checkboxId' />
      <input
        type='checkbox'
        checked={done}
        onChange={handleCompleteTask}
        className='task__checkbox'
        id='task__checkboxId'
      />
      <div className='task__outputAndDateWrapper'>
        <span className='task__output'>{task}</span>
        <span className='task__date'>{formatDate(date)}</span>
        <TaskCategoryLabel categoryId={option} />
      </div>
      <div className='task__buttonsWrapper'>
        <button
          type='button'
          className='task__edit'
          title='edit'
          onClick={() => setEdit(true)}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <button
          type='button'
          onClick={handleDeleteTask}
          title='delete'
          className='task__delete'
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
