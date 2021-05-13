import React from "react";
import "./style.css";

function Search(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          type="search"
          className="form-control"
          placeholder="Search for a User"
          id="searchInput"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  )
}

export default Search;