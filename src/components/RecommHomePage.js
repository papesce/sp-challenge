import React, { Component } from "react";
import RecommContainer from "../containers/RecommContainer";
import TemplatePage from "./TemplatePage";

export class RecommHomePage extends Component {
  render() {
    return (
      <TemplatePage>
        <RecommContainer />
      </TemplatePage>
    );
  }
}

export default RecommHomePage;
