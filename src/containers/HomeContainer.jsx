import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isAuth } from "../redux/middleware";

export const HomeContainer = AuthenticatedComponent =>
  class HomeContainer extends Component {
    render() {
      const { isAuth } = this.props;
      if (!isAuth) {
        return <Redirect to={process.env.PUBLIC_URL + "/login"} />;
      }
      return <AuthenticatedComponent {...this.state} {...this.props} />;
    }
  };

const mapStateToProps = state => {
  return {
    isAuth: isAuth(state)
  };
};

export default authenticatedComponent =>
  connect(mapStateToProps)(HomeContainer(authenticatedComponent));
