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
// const optionStyle =
//   option === "work"
//     ? workStyle
//     : option === "education"
//     ? educationStyle
//     : option === "home"
//     ? homeStyle
//     : option === "shopping"
//     ? shoppingStyle
//     : option === "entertainment"
//     ? entertainmentStyle
//     : option === "health"
//     ? healthStyle
//     : defaultStyle;

const mapStateToProps = (state, ownProps) => {
  console.log("🌍", state);
  console.log("👻", ownProps);
  const category = state.categories.find(
    (category) => category.id === ownProps.categoryId
  );
  console.log("----", category);
  return { backgroundColor: category.color, text: category.description };
};
export const TaskCategoryLabel = connect(mapStateToProps)(TaskCategoryLabel_);

export function TaskCategoryLabel_({ backgroundColor, text }) {
  return (
    <div className="task__option" style={{ backgroundColor }}>
      {text}
    </div>
  );
}
