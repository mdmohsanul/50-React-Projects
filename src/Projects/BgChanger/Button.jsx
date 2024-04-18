import React from "react";

const Button = ({ name, color, colorhandler }) => {
  return (
    <>
      <button
        className="outline-none px-1 py-2 w-24 rounded-md"
        style={{ backgroundColor: color }}
        onClick={() => colorhandler(color)}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
