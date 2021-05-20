import "./modal.scss";

const AppModal = (props) => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <div className="content">
                    <p>Some contet here...</p>
                </div>
                <div className="footer">
                    <button onClick={(e) => this.handleOK(e)}>
                        OK
                            </button>&nbsp;&nbsp;
                            <button onClick={(e) => this.closeModal(e)}>
                        Cancel
                            </button>
                </div>
            </div>
        </div>
    );
}

export default AppModal;
