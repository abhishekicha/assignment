import React, { useState } from "react";
import "./Triangle.css";

function Triangle() {
  const [text, setText] = useState("");
  const colourChange = () => {
    // document.getElementsByClassName("rec").style.backgroundColor = "green";
    setText("Button Clicked");
  };

  return (
    <>
      <div className="hello">
        <p>Hello</p>
        <p>Hello Hello</p>
        <p>Hello Hello Hello</p>
        <p>Hello Hello Hello Hello</p>
      </div>
      <div className="rec"></div>
      <button onClick={colourChange} className="rec2">
        Press
      </button>

      <br />
      <p className="tex">{text}</p>
    </>
  );
}

export default Triangle;
