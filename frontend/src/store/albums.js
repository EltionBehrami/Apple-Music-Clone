import csrfFetch from "./csrf";

export const RECEIVE_ALBUMS = "albums/RECEIVE_ALBUMS"
export const RECEIVE_ALBUM = "albums/RECEIVE_ALBUM"

const receiveAlbums = albums => {
    return {
        type: RECEIVE_ALBUMS,
        albums
    }
}

const receiveAlbum = album => {
    return {
        type: RECEIVE_ALBUM,
        album
    }
}

export const getAlbums = state => {
    return state?.albums ? Object.values(state.albums) : []; 
}

export const getAlbum = albumId => state => {
    return state?.albums ? state.albums[albumId] : null;
}


export const fetchAlbums = () => async dispatch => {
    const response = await csrfFetch("/api/albums")
    if (response.ok){
        const data = await response.json(); 
        dispatch(receiveAlbums(data))
    }
}

export const fetchAlbum = (albumId) => async dispatch => {
    const response = await csrfFetch(`/api/albums/${albumId}`)
    if (response.ok){
        const data = await response.json();
        dispatch(receiveAlbum(data.album))
    }
}


const albumsReducer = (state = {}, action) => {
    const newState = {...state}
    switch (action.type) {
        case RECEIVE_ALBUMS: 
            return {...action.albums}
        case RECEIVE_ALBUM:
            debugger
            return {...newState, [action.album.id]: action.album}   
            
        default:
            return state    
    }
}

export default albumsReducer