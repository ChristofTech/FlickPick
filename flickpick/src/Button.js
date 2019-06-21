import React from 'react'

import './Button.css';

const Button = ({ type = 'checkbox', name, checked, onChange }) => {
  return (
  <div id="ckbox">
    <label>
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
      /><span>{name}</span>
    </label>
  </div>
)};

export default Button
