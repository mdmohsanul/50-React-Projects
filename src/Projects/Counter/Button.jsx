import React from "react";

const Button = ({ name, increment, style }) => {
  let styling = `${style} rounded-md mr-4 px-4 py-2`;
  return (
    <>
      <button onClick={increment} className={styling}>
        {name}
      </button>
    </>
  );
};

export default Button;
