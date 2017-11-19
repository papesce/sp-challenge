import React, { Component } from "react";
import TopAppBar from "./TopAppBar";
import SearchBar from './SearchBar';


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <TopAppBar />
        <SearchBar />
      </div>
    );
  }
}
