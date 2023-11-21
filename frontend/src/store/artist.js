import csrfFetch from "./csrf";

export const RECEIVE_ARTISTS = "artists/RECEIVE_ARTISTS"
export const RECEIVE_ARTIST = "artists/RECEIVE_ARTIST"

const receiveArtists = artists => {
    return {
        type: RECEIVE_ARTISTS, 
        artists
    }
}

const receiveArtist = artist => {
    return {
        type: RECEIVE_ARTIST, 
        artist
    }
}


export const getArtists = state => {
    return state?.artists ? Object.values(state.artists) : [];
}

export const getArtist = artistId => state => {
    return state?.artists ? state.artists[artistId] : null;
}

export const fetchArtists = () => async dispatch => {
    const response = await (csrfFetch("/api/artists"));
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveArtists(data))
    }
}

const artistsReducer = (state = {}, action) => {
    const newState = {...state}
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return {...action.artists}
        case RECEIVE_ARTIST:
            return {...newState, [action.artist.id]: action.artist} 
        default: 
            return state; 
    }
}

export default artistsReducer; 