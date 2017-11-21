import React, { Component } from 'react'
import { connect } from 'react-redux'
import Albums from '../components/Albums'
import {getAlbums} from '../redux/selectors'
import {recommendations}  from '../redux/actions'
import Progress from '../components/Progress'
import ErrorSnackbar from '../components/ErrorSnackbar';

export class AlbumsContainer extends Component {
  
  render() {
    const {albums, handleAlbumClick} = this.props;
    if (albums) {
      if (albums.items) {
        return (<Albums albums={albums} handleClick={handleAlbumClick}/>)
      } else if (albums.loading) {
        return (<Progress status="searching..."/>)
      } else if (albums.error) {
        return <ErrorSnackbar message={albums.error.message}/>
      }   
    }
    return (<div></div>)
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
         albums: getAlbums(state)
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
     handleAlbumClick : (album) => dispatch(recommendations({album: album})) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsContainer)
