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
        <p
          style={{
            padding: "25px",
            fontFamily: "Helvetica Neue",
            fontSize: "1.2rem",
            backgroundColor: "green",
            borderRadius: "10px",
            maxWidth: "900px",
            color: "#fff",
            margin: "10px auto",
          }}
        >
          So, we have some dummy news here that we can filter them specifically
          by searching keywords in the input bar. In order to see the
          functionality, search a keyword from the title of any news. Just keep
          in mind that capital letters matter here. This function is a really
          really simple one; it's not a perfect searching engine.
        </p>
        <NewsList news={STATE.filtered} />
        {/* <Footer footer={STATE.footer} /> */}
      </>
    );
  }
}

export default App;
