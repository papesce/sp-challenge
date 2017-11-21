import React, {Component} from 'react'
import LoginPage from '../components/LoginPage'
import LoadingUserPage from '../components/LoadingUserPage'
import { Redirect } from 'react-router-dom';
import {connect}  from 'react-redux'
import {loginSuccess} from '../redux/actions'
import {url, decodeHash} from '../spotify-api/auth'


export class LoginContainer extends Component {
    componentDidMount(){
        debugger;
        const {location } = this.props;
        if (location.pathname === "/callback") {
            const hash = decodeHash(location.hash) 
            this.props.setToken(hash.access_token, hash.access_token, hash.expires_in);
          }
    }
    render () {
        const {isAuth, isLoading} = this.props;
        if (isAuth) {
            return <Redirect to="/" />; 
        }
        if (isLoading) {
            return <LoadingUserPage />;
        } 
       
        return (
            <LoginPage login_url={url}/>
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
      isLoading: (ownProps.location.pathname === "/callback")
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);