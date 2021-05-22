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
    const { id, title, status, content } = this.props.item;

    if (!id) {
      return null;
    }

    let cls = status ? status.toLowerCase() : 'not-started';
    return (
      <>
        <div className="todos-item">
          <div className="todo-title-bar">
            <div className={`item-title ${cls}`}>{title}</div>
            <button
              id="updateButton"
              onClick={(e) => this.props.openDialog(e, this.props.item)}
            >
              Edit..
            </button>
            <button
              id="deleteButton"
              onClick={(e) => this.props.deleteTodo(e, this.props.item)}
            >
              Delete
            </button>
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
