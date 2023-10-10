import React from "react";

function Eleradio(props) {
  // radio element
  return (
    <div type="radio" id={props.radiolabelname}>
      <p>{props.radiolabelname + ":"}</p>
      {props.radiooptions.map((option) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="radio"
              id={option}
              name={props.radiolabelname}
              value={option}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Eleradio;
