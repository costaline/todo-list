import React, { Component, Fragment } from "react";

class ListItem extends Component {
  state = {
    itemContent: this.props.itemContent
  };

  changeContent = evt => {
    this.setState({
      itemContent: evt.target.value
    });
  };

  onEdit = () => {
    this.props.onEdit(this.state.itemContent);
  };

  render() {
    const todoChange = (
      <Fragment>
        <textarea
          className="form-control mr-2"
          onChange={this.changeContent}
          defaultValue={this.state.itemContent}
        />
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={this.onEdit}
          type="button"
        >
          save
        </button>
      </Fragment>
    );

    const todo = (
      <Fragment>
        <span>{this.props.itemContent}</span>
        <div className="btn-group">
          <button
            className="btn btn-outline-success btn-sm"
            onClick={this.props.onEdit}
            type="button"
          >
            edit
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={this.props.onDel}
            type="button"
          >
            del
          </button>
        </div>
      </Fragment>
    );

    return <Fragment>{this.props.editMode ? todoChange : todo}</Fragment>;
  }
}

export default ListItem;
