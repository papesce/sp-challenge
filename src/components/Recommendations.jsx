import React, { Component } from "react";
import TopAppBar from "./TopAppBar";

export default class Recommendations extends Component {
  render() {
    return (
      <div>
        <TopAppBar />
        <p>{JSON.stringify(this.props)}</p>
      </div>
    );
  }
}
