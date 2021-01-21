import React from "react";
// import "./styles.css";

class Test extends React.Component {
  // state
  state = {
    userId: "",
    passWord: ""
  };
  // handleChange
  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  //handleSubmit
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.userId," was called");
    this.setState({userId: "", passWord: ""})
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="userId"
            value={this.state.userId}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="passWord"
            value={this.state.passWord}
          />
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}
export default Test
