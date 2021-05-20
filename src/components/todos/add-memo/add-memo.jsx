import React, { Component } from "react";

class AddMemoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isAddModalOpen } = this.props;
    /* debugger;
    if (isAddModalOpen == true) {
      const modal = document.getElementById("addModel");
      const span = document.getElementsByClassName("close")[0];
      if (span) {
        span.onclick = function () {
          modal.style.display = "none";
        };
      }
      modal.style.display = "block";
    } */
    return (
      <>
        {isAddModalOpen ? (
          {/* <div id={"addModel"} className="modal">
            <div className="modal-content">
              <div className="bar"></div>
              <span className={"close"}>&times;</span>
              <div className="content">
                <div className="">Add Material Goes Here</div>
              </div>
              <div className="footer">
              </div>
            </div>
          </div> */}
        ) : null}
      </>
    );
  }
}

export default AddMemoModal;
