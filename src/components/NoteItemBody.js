import React from "react";

function NoteItemBody({title, desc}){
    return (
        <div className="note-item-body">
            <h1 className="note-item-title">{title}</h1>
            <p className="note-item-desc">{desc}</p>
        </div>
        
    )
}

export default NoteItemBody;