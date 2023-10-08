import React from "react";
import './Eletextarea.css'
function Eletextarea(props) {
  return (
    <div>
      <label htmlFor={props.textareaname}>{props.textareaname}:</label>
      <textarea
      className="textarea"
        name={props.textareaname}
        id={props.textareaname}
        cols={props.cols}
        rows={props.rows}
        placeholder="Text Area"
      ></textarea>
      <div className="rule"></div>
    </div>
  );
}

export default Eletextarea;
