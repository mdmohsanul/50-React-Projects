import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const PasswordGenerator = () => {
  const [passLength, setPassLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copybutton, setcopyButton] = useState("Copy", "red");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*.?";
    for (let i = 0; i < passLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    setcopyButton("Copy");
    console.log("re-render");
  }, [passLength, numberAllowed, charAllowed, setPassword]);

  const passwordRef = useRef();

  const copyPasswordToClipboard = useCallback(() => {
    console.log(passwordRef);
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
    setcopyButton("Copied");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passLength, numberAllowed, charAllowed]);
  return (
    <>
      <div className="bg-gray-800 min-h-screen">
        <h1 className="text-white text-center text-5xl pt-7">
          Password Generator
        </h1>
        <div className="w-2/5 h-40 bg-slate-500 mt-11 mx-auto px-7 rounded-lg">
          <div className="flex items-center justify-center py-10">
            <input
              type="text"
              readOnly
              value={password}
              placeholder="password"
              ref={passwordRef}
              className="w-2/3 h-10 rounded-l-lg outline-none pl-2"
            />
            <button
              onClick={copyPasswordToClipboard}
              className="text-2xl  text-white py-1 px-3 rounded-r-lg"
              style={{ background: copybutton === "Copy" ? "blue" : "red" }}
            >
              {copybutton}
            </button>
          </div>
          <div className="flex items-center justify-center gap-1">
            <input
              type="range"
              min={7}
              max={50}
              value={passLength}
              onChange={(e) => setPassLength(e.target.value)}
            />
            <label htmlFor="">Length : {passLength}</label>
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="ml-7"
            />
            <label htmlFor="numberInput">Number</label>
            <input
              type="checkbox"
              id="charInput"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="ml-7"
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
