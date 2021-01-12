import React from "react";
import { connect } from "react-redux";
import { AddCategory } from "../AddCategory/AddCategory.js";
import { Category } from "../Category/Category";
import "./categoriesEditor.css";

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

export const CategoriesEditor = connect(mapStateToProps)(CategoriesEditor_);

function CategoriesEditor_({ categories }) {
  return (
    <div className='categoriesEditor'>
      <div className='categoriesEditor__add'>
        <AddCategory />
      </div>
      <div className='categoriesEditor__categoriesList'>
        <span className='category__categoriesList_title'>
          current list of the categories
        </span>
        {categories.map((c) => (
          <Category category={c} key={c.id} />
        ))}
      </div>
    </div>
  );
}
