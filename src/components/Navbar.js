import React from "react";
import Navigation from './Navigation';
import PropTypes from 'prop-types';

function Navbar({ searchText, onSearch}){
    return(
        <div className="note-app__header">
            <Navigation />
            <h1>Notes</h1>
            <div className="note-search">
                <input type='text' value={searchText} onChange={onSearch}></input>
            </div>
        </div>
    )
}
Navbar.propTypes = {
    searchText: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
}

export default Navbar;