import React from 'react'
import './Eledropdown.css'

function Eledropdown(props) {
  return (
    <div>
      <select name={props.dropdownname} id={props.dropdownname} className='select'>
        <option value="" className='option'>{props.dropdownname}</option>
        {props.options.map((option)=>{ 
          return <option value={option}>{option}</option>
        })}
      </select>
      <div className="rule"></div>
    </div>
  )
}

export default Eledropdown
