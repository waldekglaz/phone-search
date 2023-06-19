import React from "react";

const CategoryItem = ({ text, onClick, img }) => {
  return (
    <button onClick={onClick}>
      <span>
        <img src={img} alt={text} />
      </span>
      <span>{text}</span>
    </button>
  );
};

export default CategoryItem;
