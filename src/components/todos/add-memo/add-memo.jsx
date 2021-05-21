import React, { Component } from "react";

import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

import { createTodo } from "../../../services/todos.service";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

class AddMemoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: { title: '', priority: 'normal', status: 'not-started', content: ''  },
      selectedTab: "write",
      isLoadedOnScreen: true,
    };
  }

  onAddChange = (e) => {
    this.setState({
      newItem: { ...this.state.newItem, content: e },
    });
  };

  onTabChange = (e) => {
    this.setState({
      selectedTab: e,
    });
  };

  onValueChanged = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onTitleChanged = (e) => {
    this.setState({
      newItem: { ...this.state.newItem, title: e.target.value },
    });
  }

  handleAdd = async (e, id) => {
    await createTodo(this.state.newItem);
    window.location.reload();
    this.closeAddModal(e);
  }

  closeAddModal = (e) => {
    const modal = document.getElementById("addModal");
    if (modal) {
      modal.style.display = "none";
    }
  }

  render() {
    const { isAddModalOpen } = this.props;
    const modal = document.getElementById("addModal");
    if (modal && isAddModalOpen === true) {
      const span = document.getElementsByClassName("close-add")[0];
      if (span) {
        span.onclick = function () {
          modal.style.display = "none";
        };
      }
      modal.style.display = "block";
    }
    return (
      <>
        <div
          id={"addModal"}
          className="modal"
        >
          <div className="modal-content">
            <div className="bar"></div>
            <span className={"close close-add"}>&times;</span>
            <div className="content">
              <div className="">
                <label>Enter a title:</label>
                <br />
                <input id="title" type="text" onChange={this.onTitleChanged} />
                <br />
                <label>Enter content:</label>
                <br />
                <ReactMde
                  value={this.state.newItem.content}
                  onChange={(e) => this.onAddChange(e)}
                  onTabChange={(e) => this.onTabChange(e)}
                  selectedTab={this.state.selectedTab}
                  generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                  }
                />
              </div>
            </div>
            <div className="footer">
              <button onClick={(e) => this.handleAdd(e)}>OK</button>
              &nbsp;&nbsp;
              <button onClick={(e) => this.closeAddModal(e)}>Cancel</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddMemoModal;
