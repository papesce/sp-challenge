import React, { Component } from 'react'
import { connect } from 'react-redux'
import Albums from '../components/Albums'
import {getAlbums} from '../redux/selectors'
import Progress from '../components/Progress'
import ErrorSnackbar from '../components/ErrorSnackbar';

export class AlbumsContainer extends Component {
  
  render() {
    //debugger;
    const {albums} = this.props;
    if (albums) {
      if (albums.items) {
        return (<Albums albums={albums}/>)
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
    debugger;
    return {
         albums: getAlbums(state)
    }
}

export default connect(mapStateToProps)(AlbumsContainer)
