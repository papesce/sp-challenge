import React, { Component } from "react";
import LoginPage from "../components/LoginPage";
import LoadingUserPage from "../components/LoadingUserPage";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginSuccess } from "../redux/actions";
import { publicurl, decodeHash } from "../spotify-api/auth";
import { isAuth } from "../redux/middleware";

export class LoginContainer extends Component {
  componentDidMount() {
    const { location } = this.props;
    if (isCallback(location)) {
      const hash = decodeHash(location.hash);
      this.props.setToken(hash.access_token, hash.expirationTime);
    }
  }
  render() {
    const { isAuth, isLoading } = this.props;
    if (isAuth) {
      return <Redirect to={process.env.PUBLIC_URL + "/"} />;
    }
    if (isLoading) {
      return <LoadingUserPage />;
    }

    return <LoginPage login_url={publicurl} />;
  }
}

const isCallback = location => {
  return location.pathname.endsWith("/callback");
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: (auth_token, expiration) => {
      dispatch(loginSuccess(auth_token, undefined, expiration));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAuth: isAuth(state.user),
    isLoading: isCallback(ownProps.location)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
