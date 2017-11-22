import React, { Component } from "react";
import Albums from "./Albums";

export default class Recommendations extends Component {
  render() {
    const { tracks = [] } = this.props;
    return <Albums title="Recommendations" albums={tracks.map(a => a.album)} />;
  }
}
