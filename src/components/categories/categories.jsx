import ItemLink from "../common/item-link/item-link";
import "./categories.scss";

export default function Categories(props) {
  return (
    <div className="categories-container">
      { props.categories ?
        props.categories.map((cat) => (
          <>
            <ItemLink
              onClick={() => props.loadNotes(cat.id)}
              key={cat.id}
              text={cat["Note_Category_Name"]}
            />
            <hr style={ {width: '80%', color: 'lightgray'}} />
          </>
        )) : "<span>No categories available!</span>" }
    </div>
  );
}
