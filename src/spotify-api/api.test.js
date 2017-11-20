import { apiSearch } from './api';
import { getToken } from '../redux/selectors'
import Spotify from 'spotify-web-api-js';


jest.mock('spotify-web-api-js');
//jest.mock('getToken', () => jest.fn())

describe('spotify-api', () => {
      
it('should call spotifyApi with token', () => {
    const text = "test";
   const token = "token";
   const getState = () => ({user: {auth_token : token}})
   apiSearch(text, {getState: getState})
   expect(Spotify.mock.calls.length).toBe(1)
})


})
