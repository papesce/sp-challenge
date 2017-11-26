import React from "react";
import { RecommContainer } from "./RecommContainer";
import { shallow } from "enzyme";

describe("RecommContainer ", () => {
  it("should render correctly", () => {
    shallow(<RecommContainer recommendations={{}} />);
  });
});
