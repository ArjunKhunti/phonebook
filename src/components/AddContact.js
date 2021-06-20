import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (event) => {
    event.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the Fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name: "", email: ""});
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Add Name"
              onChange={(event) => this.setState({ name: event.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="abc@xyz.com"
              onChange={(event) => this.setState({ email: event.target.value })}
            ></input>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
