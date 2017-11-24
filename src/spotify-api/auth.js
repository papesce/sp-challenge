let REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
let REACT_APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

function getLoginURL(scopes) {
  return (
    "https://accounts.spotify.com/authorize?client_id=" +
    REACT_APP_CLIENT_ID +
    "&redirect_uri=" +
    encodeURIComponent(REACT_APP_REDIRECT_URI) +
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
