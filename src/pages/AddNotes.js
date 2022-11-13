import React from 'react';
import { addNote } from '../utils/index';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

function AddPage() {
    const navigate = useNavigate();

    function onAddContactHandler({ title, body }) {
        addNote({ title, body });
        navigate('/');
    }

    return (
        <section>
            <div className="note-app__header">
                <Navigation />
            </div>
            <div className="note-app__body">
                <NoteInput addNote={onAddContactHandler} />
            </div>
        </section>
    )
}

export default AddPage;