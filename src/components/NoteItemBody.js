import React from "react";
import { showFormattedDate } from "../utils/index.js";

function NoteItemBody({desc, createdAt}){
    return (
        <div>
            <p className="note-item__date"> {showFormattedDate(createdAt)} </p>
            <p className="note-item__body">{desc}</p>
        </div>
        
    )
}

export default NoteItemBody;