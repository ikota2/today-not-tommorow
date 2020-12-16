import React, { useState } from "react";
import { EditCategory } from "../EditCategory/EditCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { v4 } from "uuid";

// function mapStateToProps() {
//   return {

//   };
// }

export const Category = connect()(Category_);

function Category_({ category, dispatch }) {
  console.log(">>", dispatch);
  const { id, description, color } = category;
  const [edit, setEdit] = useState(false);

  function editColor(event) {
    dispatch({ type: "CHANGE_CATEGORY_COLOR", id, color: event.target.value });
  }

  function deleteCategory() {
    dispatch({ type: "REMOVE_CATEGORY", id });
  }

  function handleClick() {
    setEdit(true);
  }

  if (edit) {
    return <EditCategory category={category} />;
  }
  return (
    <div className="category">
      <div className="categoriesEditor__categoryAndButtons" key={category}>
        <input type="color" value={color} onChange={editColor} />
        <span className="categoriesEditor__categoryAndButtons-category">
          {description}
        </span>
        <div className="categoriesEditor__categoryAndButtons-buttons">
          <button
            className="categoriesEditor__categoryAndButtons-buttons-edit"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            className="categoriesEditor__categoryAndButtons-buttons-delete"
            onClick={deleteCategory}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
}
