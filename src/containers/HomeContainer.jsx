import React, {Component} from 'react'
import HomePage from '../components/HomePage'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import { getToken } from '../redux/selectors';


export class HomeContainer extends Component {
    
    render() {
        const {isAuth} = this.props;
        console.log("home container:", process.env.PUBLIC_URL);
        if (!isAuth)  return <Redirect to={process.env.PUBLIC_URL + '/login'} />;  
        return (<div>
            <HomePage />
        </div>)
    }    
}

const mapStateToProps = (state) => {
    return {
        isAuth : getToken(state) !== undefined,
    }
}

export default connect(mapStateToProps)(HomeContainer);