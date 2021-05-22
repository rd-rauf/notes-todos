import React, { Component } from "react";

import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

import { updateTodo, deleteTodo } from "../../services/todos.service";
import TodoItem from "./todo-item";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      modalItem: null,
      newItem: {},
      selectedTab: null,
    };
  }

  onChange = (e) => {
    this.setState({
      modalItem: { ...this.state.modalItem, content: e },
    });
  };

  onTabChange = (e) => {
    this.setState({
      selectedTab: e,
    });
  };

  openDialog = (e, item) => {
    this.setState({
      modalItem: item,
      selectedTab: "write",
    });
    const modal = document.getElementById("myModal");
    if (modal) {
      const span = document.getElementsByClassName("close")[0];
      if (span) {
        span.onclick = function () {
          modal.style.display = "none";
        };
      }
      modal.style.display = "block";
    }
  };

  deleteTodo = async (e, item) => {
    await deleteTodo(item);
    window.location.reload();
  };

  closeModal = (e) => {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
    }
  };

  handleUpdate = async (e, id) => {
    const updatedItem = this.state.modalItem;
    await updateTodo(updatedItem);

    const newList = this.state.list.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });

    this.setState({ list: newList });
    this.closeModal(e);
  };

  render() {
    console.log(" LIST rendered");
    const { list } = this.state;
    return (
      <>
        <div className="todos-list">
          {list.map((item) => {
            return (
              <>
                <TodoItem
                  key={item.id}
                  item={item}
                  openDialog={(e) => this.openDialog(e, item)}
                  deleteTodo={(e) => this.deleteTodo(e, item)}
                />
              </>
            );
          })}
        </div>

        <div id={"myModal"} className="modal">
          <div className="modal-content">
            <div className="bar"></div>
            <span className={"close close"}>&times;</span>
            <div className="content">
              <div className="">
                {this.state.modalItem ? (
                  <ReactMde
                    value={this.state.modalItem.content}
                    onChange={(e) => this.onChange(e)}
                    onTabChange={(e) => this.onTabChange(e)}
                    selectedTab={this.state.selectedTab}
                    generateMarkdownPreview={(markdown) =>
                      Promise.resolve(converter.makeHtml(markdown))
                    }
                  />
                ) : null}
              </div>
            </div>
            <hr />
            <div className="footer">
              <button onClick={(e) => this.handleUpdate(e)}>OK</button>
              &nbsp;&nbsp;
              <button onClick={(e) => this.closeModal(e)}>Cancel</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TodosList;
