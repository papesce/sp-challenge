import React, {Component} from 'react'
import LoginPage from '../components/LoginPage'
import LoadingUserPage from '../components/LoadingUserPage'
import { Redirect } from 'react-router-dom';
import {connect}  from 'react-redux'
import {loginSuccess} from '../redux/actions'

class LoginContainer extends Component {
    componentDidMount(){
        const {auth_token, refresh_token, expiration} = this.props.match.params;
        if (auth_token) {
            this.props.setToken(auth_token);
        }
    }
    render () {
        const {isAuth, isLoading} = this.props;
        //debugger;
        if (isAuth) {
            return <Redirect to="/" />; 
        }
        if (isLoading) {
            return <LoadingUserPage />;
        } 
        return (
            <LoginPage spotify_url="/serverlogin"/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    //debugger;
    return {
      setToken: (token) => {dispatch(loginSuccess(token))},
    }
  }

const mapStateToProps = (state, ownProps) => {
    //debugger;
    return {
      isAuth : (state.user.auth_token !== undefined),
      isLoading: (ownProps.match.params.auth_token !== undefined)
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);