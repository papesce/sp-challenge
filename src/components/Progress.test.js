import React from "react";
import ReactDOM from "react-dom";
import Progress from "./Progress";
import { shallow } from "enzyme";

describe("Progress tests", () => {
  it("renders without crashing", () => {
    shallow(<Progress />);
  });
});
