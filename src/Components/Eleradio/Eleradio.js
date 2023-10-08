import React from "react";

function Eleradio(props) {
  return (
    <div>
      <h1>{props.radiolabelname}</h1>
      {props.radiooptions.map((option) => {
        return (
          <>
            <input
              type="radio"
              id={option}
              name={props.radiolabelname}
              value={option}
            />
            <label htmlFor={option}>{option}</label>
          </>
        );
      })}
      <div className="rule"></div>
    </div>
  );
}

export default Eleradio;
