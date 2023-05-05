import SpotifyWebApi from "spotify-web-api-node";

const scope = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(",");

const params = { scope };

const queryParamString = new URLSearchParams(params).toString();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
});

if (process.env.REACT_APP_TEMP_ACCESS_TOKEN) {
  spotifyApi.setAccessToken(process.env.REACT_APP_TEMP_ACCESS_TOKEN);
}

export default spotifyApi;

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString}`;
