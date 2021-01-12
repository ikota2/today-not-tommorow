import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { EditCategory } from "../EditCategory/EditCategory";
import "./category.css";

export const Category = connect()(Category_);

function Category_({ category, dispatch }) {
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
  function closeEdit() {
    setEdit(false);
  }

  if (edit) {
    return <EditCategory id={id} closeEdit={closeEdit} />;
  }
  return (
    <div className='category'>
      <div className='categoriesEditor__categoryAndButtons' key={category}>
        <input
          type='color'
          value={color}
          onChange={editColor}
          className='categoriesEditor__categoryAndButtons-input'
        />
        <span className='categoriesEditor__categoryAndButtons-category'>
          {description}
        </span>
        <div className='categoriesEditor__categoryAndButtons-buttons'>
          <button
            className='categoriesEditor__categoryAndButtons-buttons-edit'
            onClick={handleClick}
            aria-label='редактировать'
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            className='categoriesEditor__categoryAndButtons-buttons-delete'
            onClick={deleteCategory}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
}
