import React, { Component } from "react";
import TopAppBar from "./TopAppBar";
import {CircularProgress} from 'material-ui/Progress';

class LoadingUser extends Component {
  render() {
    return (
      <div>
        <TopAppBar />
        <CircularProgress
      size={40}
      left={10}
      top={0}
      status="loading user data..."
      //style={style.refresh}
    />
    </div>
    );
  }
}

export default LoadingUser;
