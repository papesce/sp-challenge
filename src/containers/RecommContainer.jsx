import React, { Component } from "react";
import Recommendations from "../components/Recommendations";
import { connect } from "react-redux";
import Progress from "../components/Progress";
import { Redirect } from "react-router-dom";
import { recommendations } from "../redux/actions";

export class RecommContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAlbumClick = this.handleAlbumClick.bind(this);
  }
  handleAlbumClick(album) {
    this.props.fetchRecommendations(album);
  }
  render() {
    const { recommendations } = this.props;
    if (recommendations && recommendations.results) {
      if (recommendations.results.tracks) {
        return (
          <Recommendations
            tracks={recommendations.results.tracks}
            album={recommendations.album}
            handleClick={this.handleAlbumClick}
          />
        );
      }
    } else if (recommendations && recommendations.loading) {
      return <Progress status="loading..." />;
    }
    return <Redirect to={process.env.PUBLIC_URL + "/"} />;
  }
}

const mapStateToProps = state => ({
  recommendations: state.recommendations
});

const mapDispatchToProps = dispatch => ({
  fetchRecommendations: album => dispatch(recommendations({ album: album }))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommContainer);
