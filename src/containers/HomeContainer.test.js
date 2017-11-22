import React from "react";
import { HomeContainer } from "./HomeContainer";
import { mount, shallow } from "enzyme";
import { Redirect } from "react-router-dom";
import HomePage from "../components/HomePage";

describe("HomeContainer tests", () => {
  it("renders without crashing", () => {
    shallow(<HomeContainer />);
  });

  it("should render Redirect", () => {
    const props = { isAuth: false, albums: { items: [] } };
    const wrapper = shallow(<HomeContainer {...props} />);
    //expect(wrapper.find(Redirect).length).toBe(1)
    expect(wrapper.find(HomePage).length).toBe(0);
  });

  it("should render HomePage", () => {
    const props = { isAuth: true, albums: { items: [] } };
    const wrapper = shallow(<HomeContainer {...props} />);
    expect(wrapper.find(Redirect).length).toBe(0);
    //expect(wrapper.find(HomePage).length).toBe(1)
  });
});
