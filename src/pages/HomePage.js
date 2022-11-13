import React from 'react';
import NoteList from '../components/NoteList';
import { deleteNote, getAllNotes } from '../utils/index';
import Navbar from '../components/Navbar';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }
    onDelete(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const search = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
        });
        return (
            <>
                <Navbar searchText={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <div className='note-app__body'>
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={search} onDelete={this.onDeleteHandler} />
                </div>
            </>
        )
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}

export default HomePageWrapper;