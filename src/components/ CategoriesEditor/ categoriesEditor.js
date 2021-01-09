import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import Snackbar from "@material-ui/core/Snackbar";

export function CategoriesEditor() {
  const [emptyInput, setEmptyInput] = useState(false);

  const [category, setCategory] = useState([
    "home",
    "work",
    "education",
    "entertainment",
    "shopping",
    "health",
  ]);
  function addCategory(category) {
    setCategory((prev) => [...prev, category]);
  }
  function removeCategory(category) {
    setCategory((prev) => prev.filter((kind) => kind !== category));
  }
  return (
    <div className='categoriesEditor'>
      <form className='categoriesEditor__form' onSubmit={}>
        <input
          type='text'
          //   value={}
          className='categoriesEditor__form_input'
          onChange={}
          maxLength='15'
          required
        />
        <button className='categoriesEditor__addButton'>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button className='categoriesEditor__deleteButton'>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </form>
      <Snackbar
        className={classes.snackbar}
        open={emptyInput}
        autoHideDuration={3000}
        onClose={() => setEmptyInput(false)}
        message='type a category'
      ></Snackbar>
    </div>
  );
}
