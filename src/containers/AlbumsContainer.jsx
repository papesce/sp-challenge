import React, { Component } from 'react'
import { connect } from 'react-redux'
import Albums from '../components/Albums'
import {getAlbums} from '../redux/selectors'

export class AlbumsContainer extends Component {
  
  render() {
    //debugger;
    const {albums} = this.props;
    return (
      <Albums albums={albums}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
         albums: getAlbums(state)
    }
}

export default connect(mapStateToProps)(AlbumsContainer)
