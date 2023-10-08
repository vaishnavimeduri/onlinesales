import React from 'react'
import './Formfolder.css'


function Formfolder(props) {
  return (
    <>
    <h1>Form</h1>
    <div id='Formfolder'>
      
    </div>
    <button style={{ width: "80px",
            height: "40px",
            margin: "10px",
            backgroundColor: "darkgreen",
            color: "white",
            borderRadius: "5px"}} onClick={props.validate}>{props.submit}</button>
            {props.submit==="submitted"?<div>Please refresh to create an other form</div>:<div></div>}
    </>
    
  )
}

export default Formfolder
