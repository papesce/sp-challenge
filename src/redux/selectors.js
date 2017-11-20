


export const getToken = (state) => (state.user.auth_token)

export const getAlbums = (state) => {
   
    if  (!state.search)  return {}
    else return state.search.albums
}

