import React, { Component } from "react";
import TopAppBar from "./TopAppBar";
import Progress from './Progress';


class LoadingUser extends Component {
  render() {
    return (
      <div>
        <TopAppBar />
        <Progress status="loading..."/>
    </div>
    );
  }
}

export default LoadingUser;
