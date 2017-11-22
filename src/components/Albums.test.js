import React from "react";
import Albums from "./Albums";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Album tests", () => {
  let albums;
  beforeAll(() => {
    albums = {
      items: [
        {
          id: "x",
          name: "albumname",
          images: [{}, { url: "text" }],
          artists: [{ name: "name" }],
          external_urls: { spotify: "eurl" }
        }
      ]
    };
  });
  it("should ", () => {
    shallow(<Albums albums={albums} />);
  });
  it("renders correctly", () => {
    //const tree = renderer.create(<Albums albums={albums}/>)
    //    .toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
