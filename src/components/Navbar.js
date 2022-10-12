import React from "react";

function Navbar({ searchText, onSearch}){
    return(
        <div className="note-app__header">
            <h1>Notes</h1>
            <div className="note-search">
                <input type='text' value={searchText} onChange={onSearch}></input>
            </div>
        </div>
    )
}

export default Navbar;