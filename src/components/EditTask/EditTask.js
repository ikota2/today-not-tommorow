import React from "react";
import { connect } from "react-redux";
import { EDIT_TASK } from "../../redux/tasks/types";
import { Form } from "../Form/form";

const mapStateToProps = (state) => {
  return {
    value: state.description,
    option: state.categoryId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editTask: () => {
      dispatch({
        type: EDIT_TASK,
        id: ownProps.id,
      });
    },
  };
};

const EditTask_ = (id) => {
  return <Form id={id} />;
};
export const EditTask = connect(mapStateToProps, mapDispatchToProps)(EditTask_);
