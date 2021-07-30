import React, { Component } from "react";
import TodoItem from "./todo-item";
import UpdateMemo from "./update-memo/update-memo";

import { deleteTodo } from "../../services/todos.service";

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      modalItem: null,
      newItem: {},
      selectedTab: null,
      showDialog: false,
    };
  }

  openDialog = (e, item) => {
    this.setState({
      modalItem: item,
      selectedTab: "write",
      showDialog: true,
      item: item,
    });
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

  render() {
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
        <UpdateMemo
          showModal={this.state.showDialog}
          item={this.state.item}
          mode={"update"}
        />
      </>
    );
  }
}

export default TodosList;
