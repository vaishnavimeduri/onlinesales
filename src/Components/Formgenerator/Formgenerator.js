import React from "react";
import { Container } from "react-bootstrap";
import "./Formgenerator.css";

function Formgenerator(props) {
  // By selecting the options here we can choose our form element one by one. Also we can decide whether to add to our form or not.
  return (
    <div>
      <Container>
        <h1>Dynamic Form Generator</h1>
        <select
          id="form-generator"
          aria-label="Default select example"
          onChange={props.componentSelected}
          className="select"
        >
          <option value="" className="option">
            Select a component
          </option>
          <option
            value="input"
            className="option"
            onClick={props.componentSelected}
          >
            input
          </option>
          <option
            value="textarea"
            className="option"
            onClick={props.componentSelected}
          >
            textarea
          </option>
          <option
            value="dropdown"
            className="option"
            onClick={props.componentSelected}
          >
            dropdown
          </option>
          <option
            value="checkbox"
            className="option"
            onClick={props.componentSelected}
          >
            checkbox
          </option>
          <option
            value="radio"
            className="option"
            onClick={props.componentSelected}
          >
            radio
          </option>
        </select>
      </Container>
    </div>
  );
}

export default Formgenerator;
