import React from 'react'
import './SearchBar.css'

const SearchBar = ({ type = "text", value, name, placeholder, onChange, ddmON }) => {
  console.log(value)
  return (
    <div className="wrap">
       <div className="search">
          <input
            className="searchTerm"
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            disabled = {ddmON ? "disabled" : ""}>
          </input>
       </div>
    </div>
)};

export default SearchBar
