import React, { useState } from "react";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  const category = state.categories.find((category) =>
    category.id === ownProps.id ? category.description : null
  );
  return {
    initialDescription: category.description,
    initialColor: category.color,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    save: ({ description, color, id }) => {
      dispatch({
        type: "EDIT_CATEGORY",
        description,
        color,
        id,
      });
    },
  };
}

export const EditCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategory_);
function EditCategory_({
  id,
  initialDescription,
  initialColor,
  save,
  closeEdit,
}) {
  const [description, setDescription] = useState(initialDescription);
  const [color, setColor] = useState(initialColor);

  function handleSubmit(event) {
    event.preventDefault();
    save({
      description,
      color,
      id,
    });
    closeEdit();
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handleColorChange(event) {
    setColor(event.target.value);
  }
  return (
    <div className='editCategory'>
      <form className='editCategory__form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='editCategory__form_inputText'
          value={description}
          onChange={handleDescriptionChange}
        />
        <input
          type='color'
          className='editCategory__form_inputColor'
          value={color}
          onChange={handleColorChange}
        />
        <button type='submit' className='editCategory__form_btn'>
          edit
        </button>
      </form>
    </div>
  );
}
