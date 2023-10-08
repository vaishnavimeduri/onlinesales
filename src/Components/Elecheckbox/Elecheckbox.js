import React from 'react'

function Elecheckbox(props) {
  return (
    <div>
      <label htmlFor={props.checkboxname}>{props.checkboxname}</label>
      <input type="checkbox" id={props.checkboxname} name={props.checkboxname} value={props.checkboxname}/>
    </div>
  )
}

export default Elecheckbox
