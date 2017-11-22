import React from "react";
import { LoginContainer } from "./LoginContainer";
import LoginPage from "../components/LoginPage";
import LoadingUserPage from "../components/LoadingUserPage";
import { Redirect } from "react-router-dom";
import { mount, shallow } from "enzyme";

function setup(bprops) {
  const props = {
    ...bprops,
    setToken: jest.fn(),
    match: { params: {} }
  };

  const enzymeWrapper = mount(<LoginContainer {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("LoginContainer tests", () => {
  it("renders without crashing", () => {
    //shallow(<LoginContainer />);
  });

  it("should render LoginPage", () => {
    const props = { isAuth: false, isLoading: false };
    //const wrapper = shallow(<LoginContainer {...props}/>);
    //expect(wrapper.find(LoginPage).length).toBe(1)
    //expect(wrapper.find(LoadingUserPage).length).toBe(0)
    //expect(wrapper.find(Redirect).length).toBe(0)
  });

  it("should render LoadingUserPage", () => {
    const props = { isAuth: false, isLoading: true };
    //const wrapper = shallow(<LoginContainer {...props}/>);
    //expect(wrapper.find(LoginPage).length).toBe(0)
    //expect(wrapper.find(LoadingUserPage).length).toBe(1)
    //expect(wrapper.find(Redirect).length).toBe(0)
  });

  it("should render LoadingUserPage", () => {
    const props = { isAuth: true, isLoading: true };
    //const wrapper = shallow(<LoginContainer {...props}/>);
    //expect(wrapper.find(LoginPage).length).toBe(0)
    //expect(wrapper.find(LoadingUserPage).length).toBe(0)
    //expect(wrapper.find(Redirect).length).toBe(1)
  });
});
