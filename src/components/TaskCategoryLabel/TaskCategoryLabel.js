import React from "react";
import { connect } from "react-redux";

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

const mapStateToProps = (state, ownProps) => {
  console.log("🌍", state);
  console.log("👻", ownProps);
  const category =
    state.categories.find((category) => category.id === ownProps.categoryId) ??
    null;
  return { category };
  //return { backgroundColor: category.color, text: category.description };
};
export const TaskCategoryLabel = connect(mapStateToProps)(TaskCategoryLabel_);
export function TaskCategoryLabel_({ category }) {
  if (category === null) {
    return null;
  }
  const { color, description } = category;
  return (
    <div className='task__option' style={{ backgroundColor: color }}>
      {description}
    </div>
  );
}
