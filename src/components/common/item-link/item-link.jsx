import './item-link.scss';

export default function ItemLink(props) {
    return (
        <>
            <div className="item-link-item"
                onClick={props.onClick}>
                <span
                    className="text-primary">
                    {
                        props.text ? props.text : ""
                    }
                </span>
                {
                    props.subtext && (<><hr /><span className="text-secondary">
                        {
                            props.subtext ? props.subtext : ""
                        }
                    </span></>)
                }
            </div>
        </>
    );
}