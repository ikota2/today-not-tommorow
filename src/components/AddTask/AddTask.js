import React from "react";
import { connect } from "react-redux";
import { ADD_TASK } from "../../redux/tasks/types";
import { Form } from "../Form/form";

function mapDispatchToProps(dispatch) {
  return {
    addTask: ({ task, option }) =>
      dispatch({
        type: ADD_TASK,
        description: task,
        categoryId: option,
      }),
  };
}

export const AddTask = connect(null, mapDispatchToProps)(AddTask_);
function AddTask_({ addTask }) {
  return <Form buttonText='add' onSubmit={addTask} />;
}
