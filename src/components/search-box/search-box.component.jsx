import React from 'react'
import './search-box.style.css'

function SearchBox( {handleChange}) {
  return (
    <div>
      <h3>Search Items - by title</h3>
      <input
          className="search"
          type="search"
          onChange={handleChange}
        />
    </div>
  )
}

export default SearchBox