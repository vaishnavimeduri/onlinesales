import React from "react";

function Eleinput(props) {
  // input element
  return (
    <div type="input">
      <label htmlFor={props.inputname}>{props.inputname}: </label>
      <input
        id={props.inputname}
        type={props.inputtype}
        placeholder={props.inputplaceholder}
      />
    </div>
  );
}

export default Eleinput;
