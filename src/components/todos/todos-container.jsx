import React, { Component } from "react";
import TodosList from "./todos-list";

import { getTodos } from "../../services/todos.service";
import AddMemoModal from "./add-memo/add-memo";

class TodosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  async componentDidMount() {
    const response = await getTodos();
    this.setState({
      list: response.data,
      isAddModalOpen: false,
    });
  }

  openAddDialog = (e) => {
    this.setState({
      isAddModalOpen: true,
    });
  };

  render() {
    const { list } = this.state;
    return (
      <div className="todos-container">
        <div className="new-container">
          <button onClick={(e) => this.openAddDialog(e)}>Add..</button>
        </div>
        {list.length === 0 ? (
          <div style={{ textAlign: 'center' }}>
            <hr />
            <h4>
              There is no todo item. Click on 'Add' button to create one.
            </h4>
          </div>
        ) : null}
        {list && list.length ? <TodosList list={list} /> : null}
        <AddMemoModal isAddModalOpen={this.state.isAddModalOpen} item={{}} />
      </div>
    );
  }
}

export default TodosContainer;
