import React from 'react';
import Navbar from './Navbar';
import NoteInput from './NoteInput';
import {getInitialData, showFormattedDate} from '../utils/index'
import NoteList from './NoteList';


class NoteApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            search:  ""
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setStates({ notes });
    }

    onSearchHandler(event) {
      this.setState(() => {
          return {
              search: event.target.value
          };
      });
  }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                createdAt: +new Date(),
                archived: false,
              }
            ]
          }
        });
      }
    render() {
      const search = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
      const searchResult = search.filter((note) => {
        return note.archived === false;
      })
        return (
          <>
           <Navbar searchText={this.state.search} onSearch = {this.onSearchHandler} />
           <div className='note-app__body'>
               
               <NoteInput addNote = {this.onAddNoteHandler} />
               <h2>Daftar Catatan</h2>
               <NoteList notes={searchResult} onDelete={this.onDeleteHandler}/>
           </div>
          </>
          
        )
    }
}

export default NoteApp;