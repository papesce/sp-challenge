import { apiSearch, apiRecommendations } from "./api";

import Spotify from "spotify-web-api-js";

jest.mock("spotify-web-api-js");
//jest.mock('getToken', () => jest.fn())

describe("spotify-api", () => {
  it("should call spotifyApi with token", () => {
    const text = "test";
    const token = "token";
    const getState = () => ({ user: { auth_token: token } });
    apiSearch(text, { getState: getState });
    expect(Spotify.mock.calls.length).toBe(1);
  });

  it("should call apiRecommnedation with token", () => {
    const seeds = { album: { artists: [{ id: "myID" }] } };
    const token = "token";
    const getState = () => ({ user: { auth_token: token } });
    apiRecommendations(seeds, { getState: getState });
    expect(Spotify.mock.calls.length).toBe(1);
  });
});
