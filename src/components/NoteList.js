import React from 'react';
import NoteItem from './NoteItem.js';
import PropTypes from "prop-types";

class NoteList extends React.Component {
    render() {
        return this.props.notes.length > 0 ? (
            <div className="notes-list">
                {
                    this.props.notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={this.props.onDelete}
                            onActive={this.props.onActive}
                            onArchive={this.props.onArchive}
                            {...note}
                        />
                    ))
                }
            </div>
        ) : (
            <p className="notes-list__empty-message">Catatan kosong</p>
        )
        
    }
}

NoteList.propTypes = {
    id: PropTypes.string,
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NoteList;