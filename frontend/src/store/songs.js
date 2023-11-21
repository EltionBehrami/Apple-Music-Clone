import { RECEIVE_ALBUM } from "./albums";
import { SET_CURRENT_SONG } from "./playbar";
import csrfFetch from "./csrf";

export const RECEIVE_SONGS  = "songs/RECEIVE_SONGS"

export const RECEIVE_SONG  = "songs/RECEIVE_SONG"

const receiveSongs = songs => {
    return {
        type: RECEIVE_SONGS,    
        songs 
    }
}

const receiveSong = song => {
    return {
        type: RECEIVE_SONG,    
        song
    }
}

export const getSong = songId => state => {
    return state?.songs ? state.songs[songId] : null;
}

export const getSongs = state => {
    return state?.songs ? Object.values(state.songs) : [];
}

export const fetchSongs = () => async dispatch => {
    const response = await csrfFetch("/api/songs")
    if (response.ok){
        const data = await response.json(); 
        dispatch(receiveSongs(data))
    }
}

export const fetchSong = songId => async dispatch => {
    const response = await csrfFetch(`/api/songs/${songId}`)
    if (response.ok){
        const data = await response.json(); 
        dispatch(receiveSong(data))
    }
}


const songsReducer = (state = {}, action) => {
    const newState = {...state}
    switch (action.type) {
        case RECEIVE_SONGS:
            return {...newState, ...action.songs}
        case RECEIVE_SONG:
            return {...newState, [action.song.id]: action.song} 
        case RECEIVE_ALBUM: 
            return {...newState, ...action.album.albumSongs }
        case SET_CURRENT_SONG:
            return {...newState, ...action.song}    
        default: 
            return state;       
    }
}

export default songsReducer;