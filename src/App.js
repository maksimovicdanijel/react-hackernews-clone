import React, { Component } from "react";

import "./App.css";

import Main from "./Main";
import PageHeader from "./components/PageHeader";

class App extends Component {
  render() {
    return (
      <div className="app">
        <PageHeader></PageHeader>
        <Main />
      </div>
    );
  }
}

export default App;
