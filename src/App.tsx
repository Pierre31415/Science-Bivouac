import React, { Component } from "react";
import "./App.css";
import { Header, Aside, Main, Footer } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="underHeader">
          <Aside />
          <div className="bigColumn">
            <Main />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
