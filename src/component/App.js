import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
