import NoteItemTitle from "./NoteItemTitle";
import NoteItemBody from "./NoteItemBody";
import PropTypes from "prop-types";

function NoteItemText({ title, body, createdAt }) {
  return (
    <div className="note-item__text">
      <NoteItemTitle title={title} />
      <NoteItemBody desc={body} createdAt={createdAt} />
    </div>
  );
}

NoteItemText.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default NoteItemText;
