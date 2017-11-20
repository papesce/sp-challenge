import Spotify from 'spotify-web-api-js';
import {getToken} from '../redux/selectors'

const spotifyApi = new Spotify();

export const apiSearch = (searchText, args) =>  {
    const {getState} = args;
    const state = getState();
    const token = getToken(state);
    spotifyApi.setAccessToken(token);
    return spotifyApi.search(searchText, ['album'], )

    //action.albums = result.albums.items.map( (album) => {
    //    return {
    //      title: album.name
    //    };
    //  })
}