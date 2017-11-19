import React, {Component} from 'react'
import HomePage from '../components/HomePage'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';

class HomeContainer extends Component {
    
    render() {
        const {isAuth} = this.props;
        //debugger;
        if (!isAuth)  return <Redirect to="/login" />;  
        return (<HomePage/>)
    }    
}

const mapStateToProps = (state) => {
    return {
        isAuth : state.user.auth_token !== undefined
    }
}

export default connect(mapStateToProps)(HomeContainer);