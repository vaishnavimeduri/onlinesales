import "./App.css";
import { useState } from "react";
import Formgenerator from "./Components/Formgenerator/Formgenerator";
import Formmaker from "./Components/Formmaker/Formmaker";
import Formfolder from "./Components/Formfolder/Formfolder";

function App() {
  const [submit, setSubmit] = useState('submit');

  const [ele, setEle] = useState([]);
  const [inputname, setInputname] = useState("");
  const [inputtype, setInputType] = useState("");
  const [inputplaceholder, setInputPlaceholder] = useState("");

  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);
  const [textareaname, setTextareaname] = useState("");

  const [checkboxname, setCheckboxname] = useState("");

  const [dropdownname, setDropdownname] = useState("");
  const [options, setOptions] = useState([]);

  const [radiolabelname, setRadiolabelname] = useState("");
  const [radiooptions, setRadiooptions] = useState([]);

  const componentSelected = () => {
    if (document.getElementById("form-generator").value === "input") {
      let name1 = prompt("Enter label for input Tag");
      let placeholder1 = prompt("Enter a placeholder name");
      let type1 = prompt("Enter type for input Tag");

      setInputname(name1);
      setInputType(type1);
      setInputPlaceholder(placeholder1);
    } else if (document.getElementById("form-generator").value === "textarea") {
      let name1 = prompt("Enter label for Textarea");

      let rows = prompt("Enter number of columns for Textarea");
      let cols = prompt("Enter number of rows for Textarea");

      setTextareaname(name1);

      setCols(cols);
      setRows(rows);
    } else if (document.getElementById("form-generator").value === "checkbox") {
      let name1 = prompt("Enter label for Checkbox");

      setCheckboxname(name1);
    } else if (document.getElementById("form-generator").value === "dropdown") {
      let name1 = prompt("Enter name for Dropdown");
      let options1 = prompt("Enter options as comma separated values");
      setDropdownname(name1);
      let arr = options1.split(",");
      setOptions(arr);
    } else if (document.getElementById("form-generator").value === "radio") {
      let name1 = prompt("Enter label for Radio buttons");
      let options1 = prompt("Enter options as comma separated values");
      setRadiolabelname(name1);
      let arr = options1.split(",");
      setRadiooptions(arr);
    }

    const arr = [...ele];
    arr.push(`${document.getElementById("form-generator").value}`);
    setEle(arr);
  };

  const addElement = () => {
    document.getElementById("form-generator").value = "";
    if (ele.length > 0) {
      document.getElementById("Formfolder").innerHTML +=
        document.getElementsByClassName("Formmaker")[0].innerHTML;
    }
    setEle([]);
  };

  const deleteElement = () => {
    setEle([]);
  };

  const validate = () => {
    var textField = document.getElementsByTagName("input");
    let flag = false;
    for (let i = 0; i < textField.length; i++) {
      if (textField[i].type === "name") {
        if (textField[i].value.trim() === "") {
          flag = true;
          alert("Text field cannot be empty.");
        }
      } else if (textField[i].type === "email") {
        var email = textField[i].value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailPattern)) {
          flag = true;
          alert("Please enter a valid email address.");
        }
      }
    }
    if (flag === false) {
      setSubmit('submitted');
    }

    console.log(textField);
  };
  return (
    <div className="App" style={{ margin: "10px" }}>
      <Formgenerator componentSelected={componentSelected} />
      <Formmaker
        addElement={addElement}
        deleteElement={deleteElement}
        ele={ele}
        inputname={inputname}
        inputtype={inputtype}
        inputplaceholder={inputplaceholder}
        rows={rows}
        cols={cols}
        textareaname={textareaname}
        checkboxname={checkboxname}
        dropdownname={dropdownname}
        options={options}
        radiolabelname={radiolabelname}
        radiooptions={radiooptions}
      />
      <Formfolder validate={validate} submit={submit}/>
    </div>
  );
}

export default App;
