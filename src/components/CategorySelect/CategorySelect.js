import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { categories: state.categories };
}

export const CategorySelect = connect(mapStateToProps)(CategorySelect_);
function CategorySelect_({ categories, value, onChange }) {
  return (
    <div className="categorySelect">
      <select
        className="form__select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {categories.map((category) => (
          <option
            value={category.id}
            className="form__option"
            key={category.id}
          >
            {category.description}
          </option>
        ))}
      </select>
    </div>
  );
}
