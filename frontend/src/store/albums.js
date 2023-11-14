//albums js: actions creators, thunk action creators to fetch data from back end, albums reducer, then to component. 

import csrfFetch from "./csrf";

export const RECEIVE_ALBUMS = "albums/RECEIVE_ALBUMS"

const receiveAlbums = albums => {
    return {
        type: RECEIVE_ALBUMS,
        albums
    }
}

export const getAlbums = state => {
    return state?.albums ? state.albums : []; 
}


export const fetchAlbums = () => async dispatch => {
    const response = await csrfFetch("/api/albums")
    if (response.ok){
        const data = await response.json(); 
        dispatch(receiveAlbums(data))
    }
}


const albumsReducer = (state = {}, action) => {
    const newState = {...state}
    switch (action.type) {
        case RECEIVE_ALBUMS: 
            return {...action.albums}
        default:
            return state    
    }
}

export default albumsReducer