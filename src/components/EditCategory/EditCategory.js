import React, { useState } from "react";

export function EditCategory({ onEdit, category }) {
  const [value, setValue] = useState(category);
  function handleSubmit(event) {
    event.preventDefault();
    onEdit(category, value);
  }
  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <>
      <div className="editCategory" key={category}>
        <form className="editCategory__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="editCategory__form_input"
            value={value}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="editCategory__form_btn"
            onClick={onEdit}
          >
            edit
          </button>
        </form>
      </div>
    </>
  );
}
