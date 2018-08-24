import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    user: {
      name: "",
      email: "",
      message: "",
      id: ""
    }
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.el !== this.state.user) {
      this.setState({ user: nextProps.el})
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let conf
    let endpoint = '/api/lead/'
    debugger
    if (e.target.id === 'delete') {
      conf = {
        method: 'delete'
      }
      endpoint = `/api/leads/${this.state.user.id}`
    } else {
      conf = {
        method: 'post',
        body: JSON.stringify(lead),
        headers: new Headers({ "Content-Type": "application/json" })
      }
    }

    const { name, email, message } = this.state;
    const lead = { name, email, message };
    fetch(endpoint, conf).then(response => {
        debugger
        console.log(response)
        this.setState({
            name: "",
            email: "",
            message: ""
        })
        this.props.onSubmit()
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="column">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.user.name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.user.email}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                name="message"
                onChange={this.handleChange}
                value={this.state.user.message}
                required
              />
            </div>
          </div>
          <div className="control">
            <button id="send" className="button is-info" onClick={this.handleSubmit}>
              Send message
            </button>
            <button id="delete" value="delete" className="button is-danger" onClick={this.handleSubmit}>
              delete
            </button>  
          </div>

      </div>
    );
  }
}

export default Form;