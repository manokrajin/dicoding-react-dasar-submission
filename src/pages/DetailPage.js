import React from 'react';
import { useParams } from 'react-router-dom';
import NoteItemText from '../components/NoteItemText';
import { getNote } from '../utils/index';
import Navigation from '../components/Navigation';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailPage id={(id)} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        };
    }

    render() {
        if (this.state.note === null) {
            return <p>Note is not found!</p>;
        }

        return (
            <>
                <div className="note-app__header">
                    <Navigation />
                </div>
                <div className="detail-page__card">
                    <NoteItemText {...this.state.note} />
                </div>
            </>
        );
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
}

export default DetailPageWrapper;