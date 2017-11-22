import React, { Component } from "react";
import Recommendations from "../components/Recommendations";
import { connect } from "react-redux";

export class RecommendationsContainer extends Component {
  render() {
    return <Recommendations />;
  }
}

export default connect()(RecommendationsContainer);
