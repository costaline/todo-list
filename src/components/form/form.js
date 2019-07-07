import React, { Component } from "react";

class Form extends Component {
  state = {
    text: ""
  };

  onTextEnter = evt => {
    this.setState({
      text: evt.target.value
    });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.text) {
      this.props.onAdd(this.state.text);
      this.setState({
        text: ""
      });
    }
  };

  render() {
    return (
      <form className="input-group mb-2" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          onChange={this.onTextEnter}
          value={this.state.text}
          type="text"
          placeholder="new todo"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="submit">
            ADD
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
