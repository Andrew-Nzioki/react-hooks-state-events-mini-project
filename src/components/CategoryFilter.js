import React, { useState } from "react";

function CategoryFilter({ listCategoris ,applyStyle,addStyle}) {
  
 
  function handleFilterClick(e) {
    let categoryValue = e.target.id;
    applyStyle(categoryValue)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {listCategoris.map((category) => (
        <button
          id={category}
          key={category}
          onClick={handleFilterClick}
          className={addStyle}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
