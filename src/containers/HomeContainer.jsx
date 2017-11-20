import React, {Component} from 'react'
import HomePage from '../components/HomePage'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import { getToken, getAlbums } from '../redux/selectors';


class HomeContainer extends Component {
    
    render() {
        const {isAuth, albums} = this.props;
        if (!isAuth)  return <Redirect to="/login" />;  
        return (<div>
               <HomePage albums={albums}/>
        </div>)
    }    
}

const mapStateToProps = (state) => {
    return {
        isAuth : getToken(state) !== undefined,
        albums : getAlbums(state)
    }
}

export default connect(mapStateToProps)(HomeContainer);