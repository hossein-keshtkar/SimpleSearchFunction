import React, { Component } from "react";
import Header from "./components/Classes/Header";
import JSON from "./db.json";
import NewsList from "./components/Functions/NewsList";
// import Footer from "./components/Classes/Footer";

class App extends Component {
  state = {
    news: JSON,
    footer: "I'm a happy stupid footer",
    filtered: JSON,
  };

  searchHandler = (searchedNews) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        filtered: searchedNews,
      };
    });
  };

  render() {
    const STATE = this.state;

    return (
      <>
        <Header filters={STATE.news} onSearch={this.searchHandler} />
        <NewsList news={STATE.filtered} />
        {/* <Footer footer={STATE.footer} /> */}
      </>
    );
  }
}

export default App;
