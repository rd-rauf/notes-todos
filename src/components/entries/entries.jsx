import ReactMarkdown from 'react-markdown'
import "./entries.scss";

export default function Entries(props) {
  return (
    <div className="entries-container">
      { props.entries ?
        props.entries.map((entry) => (
          <div className="markdown-container"
            style={ { color: `${entry['Color']}`, backgroundColor: `${entry['Highlight_Color']}` } }>
              <ReactMarkdown>
                {
                  entry['Entry']
                }
              </ReactMarkdown>
          </div>
        )) : "<span>No entries available!</span>" }
    </div>
  );
}
