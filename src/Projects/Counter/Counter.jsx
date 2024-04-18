import React from "react";
import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const increment = () => {
    /* if we want to update the counter variable by +3
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    
    
    this will not update the counter variable by 3 bcoz react send data in patches.
    So the solution for this is set function of usestate accept one callback function
    setCounter((counter) => counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((counter) => counter + 1);
    
    */

    setCounter((counter) => counter + 1);
    setErrorMessage("");
  };

  const decreament = () => {
    if (counter === 1) {
      setErrorMessage("Cannot decrease less than zero");
    }
    setCounter(counter > 0 ? (counter) => counter - 1 : 0);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-200 text-center text-3xl">
        <h1 className="text-center p-6  ">Counter Project</h1>
        <p className="bg-slate-800 text-white py-2 px-4 rounded-md inline">
          {counter}
        </p>
        <div className="p-4">
          <Button name="Increase" increment={increment} style="bg-gray-400" />
          <Button name="Decrease" increment={decreament} style="bg-red-400" />
        </div>
        <p>{errorMessage}</p>
      </div>
    </>
  );
};

export default Counter;
