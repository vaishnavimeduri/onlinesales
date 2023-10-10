import React from "react";
import "./Formmaker.css";
import Eleinput from "../Eleinput/Eleinput";
import Eletextarea from "../Eletextarea/Eletextarea";
import Eleradio from "../Eleradio/Eleradio";
import Elecheckbox from "../Elecheckbox/Elecheckbox";
import Eledropdown from "../Eledropdown/Eledropdown";

function Formmaker(props) {
  // Based on the value either input or checkbox or radio or textarea or dropdown components are returned
  return (
    <div className="form-maker">
      <div className="Formmaker" >
        {props.ele.length === 1 ? (
          props.ele.map((value) => {
            if (value === "input") {
              return (
                <Eleinput
                  inputname={props.inputname}
                  inputtype={props.inputtype}
                  inputplaceholder={props.inputplaceholder}
                />
              );
            } else if (value === "textarea") {
              return (
                <Eletextarea
                  rows={props.rows}
                  cols={props.cols}
                  textareaname={props.textareaname}
                />
              );
            } else if (value === "radio") {
              return <Eleradio radiolabelname={props.radiolabelname} radiooptions={props.radiooptions}/>;
            } else if (value === "checkbox") {
              return <Elecheckbox checkboxname={props.checkboxname} />;
            }

            return (
              <Eledropdown
                dropdownname={props.dropdownname}
                options={props.options}
              />
            );
          })
        ) : (
          <div>Preview of your Form element here...</div>
        )}
      </div>
      <div style={{ display: "flex",margin:'10px auto' }}>
        <button
          style={{
            width: "80px",
            height: "40px",
            margin: "10px",
            backgroundColor: "darkgreen",
            color: "white",
            borderRadius: "5px",
          }}
          onClick={props.addElement}
        >
          Add
        </button>
        <button
          style={{
            width: "80px",
            height: "40px",
            margin: "10px",
            backgroundColor: "darkred",
            color: "white",
            borderRadius: "5px",
          }}
          onClick={props.deleteElement}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Formmaker;
