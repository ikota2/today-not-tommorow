import React from "react";
import { connect } from "react-redux";
import { EDIT_TASK } from "../../redux/tasks/types";
import { Form } from "../Form/form";

const EditTask = ({ id, editTask, onClose, defaultValue, defaultOption }) => {
  function handleSubmit(data) {
    editTask(data);
    onClose();
  }
  return (
    <Form
      id={id}
      onSubmit={handleSubmit}
      defaultValue={defaultValue}
      defaultOption={defaultOption}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const obj = state.tasks.find((task) => task.id === ownProps.id);
  return {
    defaultValue: obj.description,
    defaultOption: obj.categoryId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editTask: ({ task, option }) => {
      dispatch({
        description: task,
        categoryId: option,
        type: EDIT_TASK,
        id: ownProps.id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
