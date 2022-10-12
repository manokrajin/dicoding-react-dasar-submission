import React from 'react';
import NoteItemTitle from './NoteItemTitle.js';
import NoteItemBody from './NoteItemBody'
import DeleteButton from './DeleteButton.js';

function NoteItem({ title, body, createdAt, id, onDelete }) {
    return (
        <div className="note-item">
            <NoteItemTitle title={title}/>
            <NoteItemBody desc={body} createdAt={createdAt} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )
}

export default NoteItem