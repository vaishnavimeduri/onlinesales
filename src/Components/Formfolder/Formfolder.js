import React from "react";
import "./Formfolder.css";

function Formfolder(props) {
  // This is the component where our created form is present.
  return (
    <>
      <h1>Form </h1>
      <div id="Formfolder"></div>
      <button
        style={{
          width: "80px",
          height: "40px",
          margin: "10px",
          backgroundColor: "darkgreen",
          color: "white",
          borderRadius: "5px",
        }}
        onClick={props.validate}
      >
        {props.submit}
      </button>
    </>
  );
}

export default Formfolder;
