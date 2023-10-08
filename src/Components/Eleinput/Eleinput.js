import React from "react";

function Eleinput(props) {
  return (
    <div>
      <label htmlFor={props.inputname}>{props.inputname}: </label>
      <input
        id={props.inputname}
        type={props.inputtype}
        placeholder={props.inputplaceholder}
      />
      <div className="rule"></div>
    </div>
  );
}

export default Eleinput;
