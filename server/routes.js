const express = require("express");
const Spotify = require("spotify-web-api-node");
const router = new express.Router();
const path = require("path");

const BUILD_PATH = path.resolve(__dirname, "../build");
const APP_PATH = BUILD_PATH + '/index.html';
const HOST = "http://localhost:3000";
//const HOST = 'https://spotify-react-proxy.herokuapp.com'

const CLIENT_ID = process.env.client_id || "ea8767bb8c8e4d918d361ef8f0ed226f";
const CLIENT_SECRET =
  process.env.client_secret || "b64ea7fb30614aaabc008470a72f808a";
const REDIRECT_URI = process.env.redirect_uri || `${HOST}/callback`;
const STATE_KEY = "spotify_auth_state";
// configure spotify
const spotifyApi = new Spotify({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
});
// your application requests authorization
const scopes = ["user-read-private", "user-read-email"];

router.get("/token/:tok", function(_, res) {
  res.sendFile(APP_PATH );
});

router.get("/login", function(_, response) {
  response.sendFile(APP_PATH);
});
/** Generates a random string containing numbers and letters of N characters */
const generateRandomString = N =>
  (Math.random().toString(36) + Array(N).join("0")).slice(2, N + 2);

router.get("/serverlogin", (_, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});

router.get("/callback", (req, res) => {
  const { code, state } = req.query;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      const { expires_in, access_token, refresh_token } = data.body;
      res.redirect(`/token/${access_token}`);
    })
    .catch(err => {
      res.redirect("/error");
    });
});

module.exports = { router, BUILD_PATH };
