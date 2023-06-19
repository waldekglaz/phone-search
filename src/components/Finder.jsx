import React from "react";
import "./Finder.css";

const Finder = ({ onClick, name }) => {
  return (
    <div onClick={onClick} className="finder">
      {name}
    </div>
  );
};

export default Finder;
