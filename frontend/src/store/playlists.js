import csrfFetch from "./csrf";

export const RECEIVE_PLAYLISTS = "playlists/RECEIVE_PLAYLISTS"
export const RECEIVE_PLAYLIST = "playlists/RECEIVE_PLAYLIST"
export const REMOVE_PLAYLIST = "playlists/REMOVE_PLAYLIST"

const receivePlaylists = (playlists) => {
    return {
        type: RECEIVE_PLAYLISTS,
        playlists 
    }
}

const receivePlaylist = (playlist) => {
    return {
        type: RECEIVE_PLAYLIST,
        playlist 
    }
}

const removePlaylist = (playlistId) => {
    return {
        type: REMOVE_PLAYLIST,
        playlistId 
    }
}

export const getPlaylists = state => {
    return state?.playlists ? state.playlists : []; 
}

export const getPlaylist = playlistId => state => {
    return state?.playlists ? state.playlists[playlistId] : null;
} 


export const fetchPlaylists = () => async dispatch => {
    const response = await csrfFetch(`/api/playlists`);
    if (response.ok) {
        const data = await response.json(); 
        dispatch(receivePlaylists(data))
    }
}

export const fetchPlaylist = (playlistId) => async dispatch => {
    const response = await csrfFetch(`/api/playlists/${playlistId}`);
    if (response.ok) {
        const data = await response.json(); 
        dispatch(receivePlaylists(data))
    }
}

export const createPlaylist = (playlist) => async dispatch => {
    const response = await csrfFetch(`/api/playlists`, {
        method: "POST", 
        body: JSON.stringify(playlist),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
    if (response.ok) {
        const data = await response.json(); 
        dispatch(receivePlaylist(data.playlist))
    }
}

export const updatePlaylist = (playlist) => async dispatch => {
    const response = await csrfFetch(`/api/playlists/${playlist.id}`, {
        method: "PATCH", 
        body: JSON.stringify(playlist),
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        const data = await response.json(); 
        dispatch(receivePlaylist(data))
    }
}


const playlistReducer = (state = {}, action) => {
    const newState = {...state}; 
    switch (action.type) {
        case RECEIVE_PLAYLISTS: 
            return {...action.playlists};
        case RECEIVE_PLAYLIST: 
            return {...newState, [action.playlist.id]: action.playlist}
        default: 
            return state;
    }
}

export default playlistReducer

