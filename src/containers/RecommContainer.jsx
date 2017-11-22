import React, { Component } from "react";
import Recommendations from "../components/Recommendations";
import { connect } from "react-redux";
import Progress from "../components/Progress";
import { Redirect } from "react-router-dom";

export class RecommContainer extends Component {
  render() {
    const { recommendations } = this.props;
    if (recommendations.results) {
      if (recommendations.results.tracks) {
        return <Recommendations tracks={recommendations.results.tracks} />;
      }
    } else if (recommendations.loading) {
      return <Progress status="loading..." />;
    }
    return <Redirect to={process.env.PUBLIC_URL + "/"} />;
  }
}

const mapStateToProps = state => ({
  recommendations: state.recommendations
});

export default connect(mapStateToProps, undefined)(RecommContainer);
