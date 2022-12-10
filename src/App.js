// import logo from "./logo.svg";
import "./App.css";
import Buttons from "./componnets/Buttons";
import { useState } from "react";

export default function Calculator() {
  const [inputFiled, setInputFiled] = useState([]);

  const setResult = () =>
    setInputFiled((prevState) => {
      /*eslint no-eval: "error"*/
      // return [window.eval(prevState.join(""))];
    });

  return (
    <section>
      <h1>Calculator App</h1>
      <div className="container">
        <input
          value={inputFiled.join("")}
          type="text"
          className="result"
          disabled
        />
        {calKey.map((item) => (
          <div key={item.classname} className={item.classname}>
            {item[item.classname].map((item) => (
              <Buttons
                key={item.value}
                value={item.value}
                className={`global ${item.btnClass}`}
                onClick={() => item.func(setInputFiled, item.value)}
              />
            ))}
          </div>
        ))}
        <div className="conflict">
          <div className="left">
            <input
              type="button"
              value="Result"
              className="blue small white-text top-margin"
              onClick={setResult}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
const calKey = [
  {
    classname: "first-row",
    "first-row": [
      {
        value: "%",
        type: "symbol",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: "()",
        type: "symbol",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [
            ...prevState,
            prevState.includes("(") ? ")" : "(",
          ]),
      },
      {
        value: "C",
        type: "number",
        btnClass: "red-text",
        func: (setInputFiled, value) => setInputFiled([]),
      },
      {
        value: "⌫",
        type: "number",
        btnClass: "red-text",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState.slice(0, -1)]),
      },
    ],
  },
  {
    classname: "second-row",
    "second-row": [
      {
        value: "7",
        type: "number",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: "8",
        type: "number",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: "9",
        type: "number",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: "/",
        type: "symbol",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [
            ...(prevState.join("") === "/" ? "" : prevState),
            value,
          ]),
      },
    ],
  },
  {
    classname: "third-row",
    "third-row": [
      {
        value: "4",
        type: "number",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: "5",
        type: "number",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: "6",
        type: "number",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: "*",
        type: "symbol",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [
            ...(prevState.join("") === "*" ? "" : prevState),
            value,
          ]),
      },
    ],
  },
  {
    classname: "fourth-row",
    "fourth-row": [
      {
        value: "1",
        type: "number",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: "2",
        type: "number",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: "3",
        type: "number",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: "-",
        type: "symbol",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [
            ...(prevState.join("") === "-" ? "" : prevState),
            value,
          ]),
      },
    ],
  },
  {
    classname: "fiveth-row",
    "fiveth-row": [
      {
        value: "0",
        type: "number",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: ".",
        type: "symbol",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [...prevState, value]),
      },
      {
        value: "</>",
        type: "symbol",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [
            ...prevState,
            !prevState.includes(["<", ">", "/"]) ? "<" : ">",
          ]),
      },
      {
        value: "+",
        type: "symbol",
        btnClass: "",
        func: (setInputFiled, value) =>
          setInputFiled((prevState) => [
            ...(prevState.join("") === "+" ? "" : prevState),
            value,
          ]),
      },
    ],
  },
];
