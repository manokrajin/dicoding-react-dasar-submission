import React from 'react';
import Navbar from './Navbar';
import NoteInput from './NoteInput';
import {getInitialData, showFormattedDate} from '../utils/index'

class NoteApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setStates({ notes });
    }

    onAddNoteHandler({ title, description }) {
        this.setState((prevState) => {
          return {
            contacts: [
              ...prevState.contacts,
              {
                id: +new Date(),
                title,
                description,
              }
            ]
          }
        });
      }
    render() {
        return (
            <div>
                <Navbar />
                <NoteInput/>
            </div>
        )
    }
}

export default NoteApp;