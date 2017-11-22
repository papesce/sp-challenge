import React, { Component } from "react";
import Albums from "./Albums";

export default class Recommendations extends Component {
  render() {
    const { tracks = [], album = {}, handleClick } = this.props;
    let aname = "";
    if (album.name) aname = ` for ${album.artists[0].name}`;
    return (
      <Albums
        title={"Recommendations" + aname}
        albums={tracks.map(a => a.album)}
        handleClick={handleClick}
      />
    );
  }
}
