import Spotify from "spotify-web-api-js";
import { getToken } from "../redux/selectors";

const spotifyApi = new Spotify();

const apiSearchSpotify = (searchText, args, api) => {
  const { getState } = args;
  const state = getState();
  const token = getToken(state);
  api.setAccessToken(token);
  return api.search(searchText, ["album"]);
};

export const apiSearch = (searchText, args) =>
  apiSearchSpotify(searchText, args, spotifyApi);

const apiRecommendationsSpotify = (seeds, args, api) => {
  const { getState } = args;
  const state = getState();
  const token = getToken(state);
  api.setAccessToken(token);
  const album = seeds.album;
  const options = {
    seed_artists: [album.artists[0].id],
    seed_genres: [],
    seed_tracks: []
  };
  return api.getRecommendations(options);
};

export const apiRecommendations = (seeds, args) =>
  apiRecommendationsSpotify(seeds, args, spotifyApi);
