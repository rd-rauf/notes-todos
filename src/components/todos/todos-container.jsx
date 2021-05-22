import React, { Component } from "react";
import TodosList from "./todos-list";

import { getTodos } from "../../services/todos.service";
import UpdateMemo from "./update-memo/update-memo";

class TodosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  async componentDidMount() {
    const response = await getTodos();
    this.setState({
      list: response.data,
      showModal: false,
    });
  }

  openAddDialog = (e) => {
    this.setState({
      showModal: true,
    });
  };

  handleCloseModal = (e) => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { list, showModal } = this.state;
    return (
      <div className="todos-container">
        <div className="new-container">
          <button onClick={(e) => this.openAddDialog(e)}>Add..</button>
        </div>
        {list.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <hr />
            <h4>There is no todo item. Click on 'Add' button to create one.</h4>
          </div>
        ) : null}
        {list && list.length && !showModal ? <TodosList list={list} /> : null}
        <UpdateMemo
          showModal={this.state.showModal}
          handleCloseModal={(e) => this.handleCloseModal(e)}
          mode={"add"}
          item={{}}
        />
      </div>
    );
  }
}

export default TodosContainer;
