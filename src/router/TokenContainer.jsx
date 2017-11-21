import React, { Component } from 'react'
import {decodeHash} from '../spotify-api/auth.js'

export default class TokenContainer extends Component {
    
    componentDidMount(){
        const {location} = this.props;
        const hash = decodeHash(location.hash);
        
    }
    render() {
        
    return (
      <div>
           <p>decoding...</p>
     </div>
    )
  }
}
