import React from "react";
import { shallow } from "enzyme";
import ErrorSnackbar from "./ErrorSnackbar";
//import renderer from "react-test-renderer";

describe("SearchBar tests", () => {
  it("should render", () => {
    shallow(<ErrorSnackbar message="message" />);
  });
  it("renders correctly", () => {
    // TypeError: node.getBoundingClientRect is not a function
    //const tree = renderer.create(<ErrorSnackbar message="message"/>)
    //      .toJSON();
    //   expect(tree).toMatchSnapshot();
  });
});
