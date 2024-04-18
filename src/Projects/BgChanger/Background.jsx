import React from "react";
import { useState } from "react";
import Button from "./Button";
import { Colors } from "./Data/Colors";

const Background = () => {
  const [color, setcolor] = useState("red");
  const colors = Colors;
  const colorhandler = (bgColor) => {
    setcolor(bgColor);
    console.log(bgColor);
  };
  return (
    <>
      <div className=" min-h-screen" style={{ backgroundColor: color }}>
        <div className=" fixed  flex flex-wrap inset-x-0 justify-center bottom-12   text-xl text-black ">
          <div className="flex flex-wrap justify-center items-center bg-white rounded-2xl gap-7 px-4 py-2">
            {colors.map((item) => (
              <Button
                key={item.key}
                name={item.name}
                color={item.color}
                colorhandler={colorhandler}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
