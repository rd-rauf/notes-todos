import React, { Component } from "react";
import ReactModal from "react-modal";

import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

import { updateTodo, createTodo } from "../../../services/todos.service";
import "../form.scss";
import "../modal.scss";

ReactModal.setAppElement("#root");
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

class UpdateMemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      selectedTab: "write",
      showModal: props.showModal,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.showModal,
      item: nextProps.item,
    });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
    if (this.props.handleCloseModal) {
      this.props.handleCloseModal();
    }
  };

  onChange = (e) => {
    this.setState({
      item: { ...this.state.item, content: e },
    });
  };

  onTabChange = (e) => {
    this.setState({
      selectedTab: e,
    });
  };

  onTitleChanged = (e) => {
    this.setState({
      item: { ...this.state.item, title: e.target.value },
    });
  };

  handleStatusChange = async (e, id) => {
    this.setState({
      item: { ...this.state.item, status: e.target.value },
    });
  };

  handleUpdate = async (e, id) => {
    const item = this.state.item;

    if (!item.status) {
      item.status = "not-started";
    }
    if (this.props.mode === "add") {
      await createTodo(item);
    }
    if (this.props.mode === "update") {
      await updateTodo(item);
    }
    this.handleCloseModal(e);
    window.location.reload();
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
          <div className="content">
            <span
              className={"close close-add"}
              style={{ float: "right" }}
              onClick={(e) => this.handleCloseModal(e)}
            >
              &times;
            </span>
            <div>
              {this.state.item ? (
                <>
                  <div className="form-control">
                    <label>Enter a title:</label>
                    <input
                      id="title"
                      type="text"
                      onChange={this.onTitleChanged}
                      value={this.state.item.title}
                    />
                  </div>
                  <div className="form-control">
                    <label>Select a status:</label>
                    <select
                      onChange={(e) => this.handleStatusChange(e)}
                      value={this.state.item.status}
                    >
                      <option value="not-started">Not Started</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label>Enter content:</label>
                    <ReactMde
                      value={this.state.item.content}
                      onChange={(e) => this.onChange(e)}
                      onTabChange={(e) => this.onTabChange(e)}
                      selectedTab={this.state.selectedTab}
                      onRequestClose={this.handleCloseModal}
                      generateMarkdownPreview={(markdown) =>
                        Promise.resolve(converter.makeHtml(markdown))
                      }
                    />
                  </div>
                </>
              ) : null}
            </div>
            <div className="footer">
              <button onClick={(e) => this.handleUpdate(e)}>Save</button>
              &nbsp;&nbsp;
              <button onClick={(e) => this.handleCloseModal(e)}>Cancel</button>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default UpdateMemo;
