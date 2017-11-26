import React from "react";
import RecommHomePage from "./RecommHomePage";
import { shallow } from "enzyme";

describe("RecommHomePage ", () => {
  it("should render correctly", () => {
    shallow(<RecommHomePage />);
  });
});
