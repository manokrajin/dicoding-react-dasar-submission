import React from "react";
import { showFormattedDate } from "../utils/index.js";

function NoteItemBody({desc, createdAt}){
    return (
        <div className="note-item__body">
            <p className="note-item__date">{showFormattedDate(createdAt)}</p>
            <p className="note-item__desc">{desc}</p>
        </div>
        
    )
}

export default NoteItemBody;