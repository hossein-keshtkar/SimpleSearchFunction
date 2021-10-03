import React from "react";
import classes from "./Header.module.css";

class Header extends React.Component {
  state = {
    userInput: "",
  };

  filter = (props) => {
    let filtering = this.props.filters.filter((item) => {
      return item.title.indexOf(this.state.userInput) > -1;
    });
    console.log(filtering);
    this.props.onSearch(filtering);
  };

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
    this.filter();
  };

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.logo}>
          <p>Logo</p>
        </div>
        <div className={classes.input}>
          <input type="text" onChange={this.inputChangeHandler} />
        </div>
      </div>
    );
  }
}

export default Header;
