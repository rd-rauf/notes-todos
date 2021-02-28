import './item-link.scss';

export default function ItemLink(props) {
    return (
        <span
            className="item-link-item"
            onClick={props.onClick}>
            {
                props.text ? props.text : ""
            }
        </span>
    );
}