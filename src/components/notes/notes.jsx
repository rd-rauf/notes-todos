import ItemLink from "../common/item-link/item-link";
import "./notes.scss";

export default function Notes(props) {
  return (
    <div className="notes-container">
      { props.notes && props.notes ?
        props.notes.map((note) => (
          <>
            <ItemLink
              onClick={() => props.loadEntries(note.id)}
              key={note.id}
              text={note["note_name"]}
            />
            <hr style={ {width: '80%', color: 'lightgray'}} />
            </>
        )) : <span>No notes available!</span> }
    </div>
  );
}
