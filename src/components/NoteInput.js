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
        const maxTitle = 50;
        this.setState(() => {
            return {
                title: e.target.value.slice(0, maxTitle),
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

                <div className='note-input__body'>
                    <h1 className='note-input__title'>Buat Catatan</h1>
                    <form onSubmit={this.onSubmitHandler}>
                        <p className="note-input__title__max-title">Sisa Karakter {50 - this.state.title.length}</p>
                        <input type='text' className='note-input-text-area' placeholder='Judul' value={this.state.title} onChange={this.onNameChangeHandler} />
                        <textarea type='text' className='note-input-text-area' placeholder='Deskripsi' value={this.state.description} onChange={this.onDescriptionChangeHandler} />
                        <button type='submit'>Tambah</button>
                    </form>
                </div>

            </form>
        )
    }

}

export default NoteInput;