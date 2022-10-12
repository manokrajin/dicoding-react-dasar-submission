import React from 'react';
 
function NoteItemTitle({ title }) {
 return (
   <div className="note-item__title">
     <h3>{title}</h3>
   </div>
 );
}
 
export default NoteItemTitle;