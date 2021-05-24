import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import "./todos.scss";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { item: { ...props.item } };
  }

  render() {
    console.log(" ITEM rendered");
    const { id, title, status, created_at, updated_at, content } = this.props.item;

    if (!id) {
      return null;
    }
    let cls = status ? status.toLowerCase() : 'not-started';
    return (
      <>
        <div className="todos-item">
          <div className="todo-title-bar">
            <div className={`item-title ${cls}`}>{title}
              <div className="additional-info">
                {/* <span className="subtitle-info"><i>Subtitle: </i> { subtitle ? subtitle : '-' }</span> */}
                <span className="subtitle-info">Status: { status ? status : '-' }</span>
                <span className="subtitle-info">Created On: { created_at ? (new Date(Date.parse(created_at)).toLocaleString()) : '-' }</span>
                <span className="subtitle-info">Last Updated On: { updated_at ? (new Date(Date.parse(updated_at)).toLocaleString()) : '-' }</span>
              </div>
            </div>
            <button
              id="updateButton"
              onClick={(e) => this.props.openDialog(e, this.props.item)}
            >
              Edit..
            </button>
            {/* <button
              id="deleteButton"
              onClick={(e) => this.props.deleteTodo(e, this.props.item)}
            >
              Delete
            </button> */}
          </div>
          <div className="item-content">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </>
    );
  }
}

export default TodoItem;
