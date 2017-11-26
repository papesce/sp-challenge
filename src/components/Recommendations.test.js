import React from "react";
import { shallow } from "enzyme";
import Recommendations from "./Recommendations";

describe("Recommendations", () => {
  it("should render correctly", () => {
    shallow(<Recommendations />);
  });
});
