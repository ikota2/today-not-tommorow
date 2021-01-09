import React from "react";
import { connect } from "react-redux";
import "./categorySelect.css";

function mapStateToProps(state) {
  return { categories: state.categories };
}

export const CategorySelect = connect(mapStateToProps)(CategorySelect_);
function CategorySelect_({ categories, value, onChange }) {
  {
    console.log(value);
  }
  return (
    <div className='categorySelect'>
      <select
        className='categorySelect__select'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option className='categorySelect__option_disabled' value='default'>
          no category
        </option>
        {categories.map((category) => (
          <option
            value={category.id}
            className='categorySelect__option'
            key={category.id}
          >
            {category.description}
          </option>
        ))}
      </select>
    </div>
  );
}
