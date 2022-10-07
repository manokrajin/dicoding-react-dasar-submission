import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        }
        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.onDescriptionChangeHandler = this.onDescriptionChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onNameChangeHandler(e) {
        this.setState(() => {
            return {
                title: e.target.value,
            }
        });
    }
    onDescriptionChangeHandler(e) {
        this.setState(() => {
            return {
                description: e.target.value,
            }
        });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.addNotes(this.state);
    }

    render(){
        return(
            <form className='note-input' onSubmit={this.onSubmitHandler}>
                <input type='text' className='note-input-text-area' placeholder='Judul' value={this.state.title} onChange={this.onNameChangeHandler} />
                <input type='text' className='note-input-text-area' placeholder='Deskripsi' value={this.state.description} onChange={this.onDescriptionChangeHandler} />
                <button type='submit'>Tambah</button>
            </form>
        )
    }

}

export default NoteInput;