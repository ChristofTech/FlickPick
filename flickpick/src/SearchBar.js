import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="wrap">
       <div className="search">
          <input type="text" className="searchTerm" placeholder="Movies, Actors, more..."></input>
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
         </button>
       </div>
    </div>
)};

export default SearchBar
