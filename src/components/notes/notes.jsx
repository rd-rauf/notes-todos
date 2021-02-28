import ItemLink from "../common/item-link/item-link";
import "./notes.scss";

export default function Notes(props) {
  return (
    <div className="notes-container">
      { props.notes ?
        props.notes.map((note) => (
          <ItemLink
            onClick={() => props.loadEntries(note.id)}
            key={note.id}
            text={note["Note_Name"]}
          />
        )) : "<span>No notes available!</span>"}
    </div>
  );
}
