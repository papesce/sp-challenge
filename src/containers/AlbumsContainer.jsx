import React, { Component } from "react";
import { connect } from "react-redux";
import Albums from "../components/Albums";
import { getAlbums } from "../redux/selectors";
import { push } from "react-router-redux";
import Progress from "../components/Progress";
import ErrorSnackbar from "../components/ErrorSnackbar";
import { recommendations } from "../redux/actions";

export class AlbumsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAlbumClick = this.handleAlbumClick.bind(this);
  }
  handleAlbumClick(album) {
    const newurl = `${process.env.PUBLIC_URL}/recommendations/${album.id}`;
    this.props.fetchRecommendations(album);
    this.props.changeUrl(newurl);
  }
  render() {
    const { albums } = this.props;
    if (albums) {
      if (albums.items) {
        return (
          <Albums
            title={"Albums"}
            albums={albums.items}
            handleClick={this.handleAlbumClick}
          />
        );
      } else if (albums.loading) {
        return <Progress status="searching..." />;
      } else if (albums.error) {
        return <ErrorSnackbar message={albums.error.message} />;
      }
    }
    return <div />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    albums: getAlbums(state)
  };
};

const mapDispatchToProps = dispatch => ({
  changeUrl: url => {
    dispatch(push(url));
  },
  fetchRecommendations: album => dispatch(recommendations({ album: album }))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsContainer);
