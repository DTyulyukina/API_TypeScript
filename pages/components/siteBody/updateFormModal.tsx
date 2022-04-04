import React, {Component} from "react";

type TUpdateFormModalProps = {
  isShown: boolean;
  close: (index: number) => void;
  showAdd: () => void;
  addDelete: () => void;
  indexMovie: number;
};

class UpdateFormModal extends Component<TUpdateFormModalProps, {}> {
  handleClose = () => this.props.close(this.props.indexMovie);
  handleShowAdd = () => this.props.showAdd();
  handleAddDelete = () => this.props.addDelete();

  render() {
    const modal = this.props.isShown && (
      <div className="modal-update">
        <div className="modal-update-movie">
          <div className="button-close-container">
            <button className="button-close" onClick={this.handleClose}>
              X
            </button>
          </div>
          <div className="update-form">
            <div className="button-uptate" onClick={this.handleShowAdd}>
              Edit
            </div>
            <div className="button-uptate" onClick={this.handleAddDelete}>
              Delete
            </div>
          </div>
        </div>
      </div>
    );

    return <div className="app-modal-update">{modal}</div>;
  }
}

export default UpdateFormModal;
