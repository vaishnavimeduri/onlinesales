import React from "react";

function Elecheckbox(props) {
  // checkbox element
  return (
    <div type="checkbox" style={{ display: "flex", justifyContent: "center" }}>
      <label htmlFor={props.checkboxname}>{props.checkboxname}</label>
      <input
        type="checkbox"
        id={props.checkboxname}
        name={props.checkboxname}
        value={props.checkboxname}
      />
    </div>
  );
}

export default Elecheckbox;
