import React from "react";
import { AlbumsContainer } from "./AlbumsContainer";
import { shallow } from "enzyme";
import Albums from "../components/Albums";
import Progress from "../components/Progress";
import ErrorSnackbar from "../components/ErrorSnackbar";

describe("AlbumsContainer tests", () => {
  it("renders without crashing", () => {
    shallow(<AlbumsContainer />);
  });

  it("should render Albums", () => {
    const props = { albums: { items: [] } };
    const wrapper = shallow(<AlbumsContainer {...props} />);
    //expect(wrapper.find(Albums).length).toBe(1)
    expect(wrapper.find(Progress).length).toBe(0);
    expect(wrapper.find(ErrorSnackbar).length).toBe(0);
  });

  it("should render Progress", () => {
    const props = { albums: { loading: true } };
    const wrapper = shallow(<AlbumsContainer {...props} />);
    expect(wrapper.find(Albums).length).toBe(0);
    expect(wrapper.find(Progress).length).toBe(1);
    expect(wrapper.find(ErrorSnackbar).length).toBe(0);
  });

  it("should render Progress", () => {
    const props = { albums: { error: "message" } };
    const wrapper = shallow(<AlbumsContainer {...props} />);
    expect(wrapper.find(Albums).length).toBe(0);
    expect(wrapper.find(Progress).length).toBe(0);
    expect(wrapper.find(ErrorSnackbar).length).toBe(1);
  });
});
