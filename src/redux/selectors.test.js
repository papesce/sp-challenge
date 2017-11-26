import { getAlbums, getRecommendations, getSearchText } from "./selectors";

describe("selectors test suite", () => {
  it("getAlbums should return the albums from the state ", () => {
    const album = { album: "123" };
    const state = { search: { albums: album } };
    const result = getAlbums(state);
    expect(result).toEqual(album);
  });
  it("getAlbums should return {} is there is no search state ", () => {
    const state = {};
    const result = getAlbums(state);
    expect(result).toEqual({});
  });
  it("getRecommendations should return recommendations", () => {
    const state = { recommendations: "123" };
    const result = getRecommendations(state);
    expect(result).toEqual("123");
  });
  it("getSearchText should return the search text ", () => {
    const state = { search: { albums: { searchText: "123" } } };
    const result = getSearchText(state);
    expect(result).toEqual("123");
  });
});
