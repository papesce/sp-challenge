export const getToken = state => state.user.auth_token;

export const getAlbums = state => {
  if (!state.search) return {};
  else return state.search.albums;
};

export const getRecommendations = state => state.recommendations;

export const getSearchText = state => {
  return state.search && state.search.albums && state.search.albums.searchText
    ? state.search.albums.searchText
    : "";
};
