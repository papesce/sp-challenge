import React from "react";
import RouteErrorComponent from "./RouteErrorComponent";
import { shallow } from "enzyme";

describe("RouteErrorComponent suite ", () => {
  it("should render correctly", () => {
    shallow(<RouteErrorComponent />);
  });
});
