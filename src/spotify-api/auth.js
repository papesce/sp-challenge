var CLIENT_ID = "";
var REDIRECT_URI = "";

let deploy = "localhost";
//let deploy = 'heroku-dev';
if (process.env.NODE_ENV === "production") {
  deploy = "heroku";
}

if (deploy === "heroku") {
  CLIENT_ID = "ea8767bb8c8e4d918d361ef8f0ed226f";
  REDIRECT_URI = "https://papesce-spotify-challenge.herokuapp.com/callback";
} else if (deploy === "heroku-dev") {
  CLIENT_ID = "4b874591c89847c88d505d8ca15e3fee";
  REDIRECT_URI = "https://papesce-spotify-challenge-dev.herokuapp.com/callback";
} else if (deploy === "github.io") {
  CLIENT_ID = "aebf92e9410e430b8fa311baa08bcb5a";
  REDIRECT_URI = "https://papesce.github.io/sp-challenge/callback";
} else {
  CLIENT_ID = "844625938f10463086a5418f6eb5f1a1";
  REDIRECT_URI = "http://localhost:3000/callback";
}

function getLoginURL(scopes) {
  return (
    "https://accounts.spotify.com/authorize?client_id=" +
    CLIENT_ID +
    "&redirect_uri=" +
    encodeURIComponent(REDIRECT_URI) +
    "&scope=" +
    encodeURIComponent(scopes.join(" ")) +
    "&response_type=token"
  );
}

export const url = getLoginURL([
  "user-read-private",
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-library-read",
  "user-library-modify",
  "user-follow-read",
  "user-follow-modify"
]);

export const publicurl = getLoginURL([]);

export const decodeHash = function(locationhash) {
  var hash = {};
  locationhash
    .replace(/^#\/?/, "")
    .split("&")
    .forEach(function(kv) {
      var spl = kv.indexOf("=");
      if (spl !== -1) {
        hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl + 1));
      }
    });

  //console.log('initial hash', hash);
  hash.expirationTime = new Date().getTime() + Number(hash.expires_in) * 1000;
  return hash;
};
