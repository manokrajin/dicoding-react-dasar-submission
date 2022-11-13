import React from 'react';
import NoteItemTitle from './NoteItemTitle.js';
import NoteItemBody from './NoteItemBody'
import DeleteButton from './DeleteButton.js';
import NoteItemText from './NoteItemText.js';
import NoteArchiveButton from './NoteArchiveButton.js';
import PropTypes from 'prop-types';

function NoteItem({ title, body, createdAt, id, onDelete, onArchive, isArchive }) {
    return (
        <div className="note-item">
            <div className='note-item__Text'>
            <NoteItemText title={title} body={body} createdAt={createdAt} />
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <NoteArchiveButton id={id} onArchive={onArchive} isArchive={isArchive} />
            </div>
        </div>
    )
}

NoteItem.propType = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteItem