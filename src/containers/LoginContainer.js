import React, {Component} from 'react'
import LoginPage from '../components/LoginPage'
import LoadingUserPage from '../components/LoadingUserPage'
import { Redirect } from 'react-router-dom';
import {connect}  from 'react-redux'
import {loginSuccess} from '../redux/actions'

export class LoginContainer extends Component {
    componentDidMount(){
        if (this.props.match) {
          const {auth_token, refresh_token, expiration} = this.props.match.params;
          if (auth_token) {
            this.props.setToken(auth_token, refresh_token, expiration);
          }
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
      setToken: (auth_token, refresh_token, expiration) => 
      {dispatch(loginSuccess(auth_token, refresh_token, expiration))},
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