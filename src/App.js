import "./App.css";
import { useState } from "react";
import Formgenerator from "./Components/Formgenerator/Formgenerator";
import Formmaker from "./Components/Formmaker/Formmaker";
import Formfolder from "./Components/Formfolder/Formfolder";

function App() {
  const [submit, setSubmit] = useState("submit");
  const [num, setNum] = useState(1);

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

  const [formfields, setFormfields] = useState([]);
  const [forms, setForms] = useState({});

  const componentSelected = () => {
    if (document.getElementById("form-generator").value === "input") {
      let name1 = prompt("Enter label for input Tag");
      let arr1 = [...formfields];
      arr1.push(["input", name1]);
      setFormfields(arr1);
      let placeholder1 = prompt("Enter a placeholder name");
      let type1 = prompt("Enter type for input Tag");

      setInputname(name1);
      setInputType(type1);
      setInputPlaceholder(placeholder1);
    } else if (document.getElementById("form-generator").value === "textarea") {
      let name1 = prompt("Enter label for Textarea");
      let arr1 = [...formfields];
      arr1.push(["textarea", name1]);
      setFormfields(arr1);
      let rows = prompt("Enter number of columns for Textarea");
      let cols = prompt("Enter number of rows for Textarea");

      setTextareaname(name1);

      setCols(cols);
      setRows(rows);
    } else if (document.getElementById("form-generator").value === "checkbox") {
      let name1 = prompt("Enter label for Checkbox");
      let arr1 = [...formfields];
      arr1.push(["checkbox", name1]);
      setFormfields(arr1);
      setCheckboxname(name1);
    } else if (document.getElementById("form-generator").value === "dropdown") {
      let name1 = prompt("Enter name for Dropdown");
      let arr1 = [...formfields];
      arr1.push(["dropdown", name1]);
      setFormfields(arr1);
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
      arr.push(name1);
      let arr1 = [...formfields];
      arr1.push(["radio", arr]);
      setFormfields(arr1);
    }

    let arr = [...ele];
    arr.push(`${document.getElementById("form-generator").value}`);
    setEle(arr);
  };

  const addElement = () => {
    document.getElementById("form-generator").value = "";
    if (ele.length > 0) {
      document.getElementById("Formfolder").innerHTML +=
        document.getElementsByClassName("Formmaker")[0].innerHTML;
      document.getElementById("Formfolder").innerHTML +=
        '<div class="rule" ></div>';
    }
    setFormfields(formfields);
    setEle([]);
  };

  const deleteElement = () => {
    let arr1 = [...formfields];
    arr1.pop();
    setFormfields(arr1);
    setEle([]);
  };

  const validate = () => {
    var textField = document.getElementsByTagName("input");
    let flag = false;
    for (let i = 0; i < textField.length; i++) {
      if (textField[i].type === "text") {
        if (textField[i].value.trim() === "") {
          flag = true;
          alert("Text field cannot be empty.");
          return;
        }
      } else if (textField[i].type === "email") {
        var email = textField[i].value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailPattern)) {
          flag = true;
          alert("Please enter a valid email address.");
          return;
        }
      }
    }
    if (flag === false) {
      let obj = {};
      for (let i = 0; i < formfields.length; i++) {
        if (formfields[i][0] === "input") {
          let id = formfields[i][1];
          let val = document.getElementById(`${id}`).value;
          obj[id] = val;
        } else if (formfields[i][0] === "textarea") {
          let id = formfields[i][1];
          let val = document.getElementById(id).value;
          if(val===""||val===null){
            alert("Text area field cannot be empty.");
            return;
          }
          obj[id] = val;
        } else if (formfields[i][0] === "dropdown") {
          let id = formfields[i][1];
          let val = document.getElementById(id).value;
          if(val===""||val===null){
            alert("Dropdown field cannot be empty.");
            return;
          }
          obj[id] = val;
        } else if (formfields[i][0] === "checkbox") {
          let id = formfields[i][1];
          let val = document.getElementById(id).checked;
          obj[id] = val;
        } else {
          for (let j = 1; j < formfields[i][1].length - 1; j++) {
            if (document.getElementById(formfields[i][1][j]).checked) {
              let x = formfields[i][1][formfields[i][1].length - 1];
              obj[x] = document.getElementById(formfields[i][1][j]).value;
            }
          }
        }
      }
      let a = { ...forms };
      a[num] = obj;
      console.log(a);
      setForms(a);
      document.getElementById("Formfolder").innerHTML = "";
      setFormfields([]);
      setNum(num + 1);
      setSubmit("submit");
      console.log(forms);
    }
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
      <Formfolder validate={validate} submit={submit} />
    </div>
  );
}

export default App;
