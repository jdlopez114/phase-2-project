import React from "react";

function Search ({ handleSearch }) {

  return (
    <div className="ui-search" width='100%'>
      <div className="ui-icon-input" >
        <input onChange={handleSearch} className="search" placeholder="Search..."/>
      </div>
    </div>
  );
}

export default Search