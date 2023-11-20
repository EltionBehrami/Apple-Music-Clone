
export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'
export const SET_CURRENT_SONG = "SET_CURRENT_SONG"
export const SET_QUEUE = "SET_QUEUE"

export const playSong = () => {
    return {
        type: PLAY
    }
}

export const pauseSong = () => {
    return {
        type: PAUSE,
    }
}

export const setCurrentSong = song => {
    return {
        type: SET_CURRENT_SONG, 
        song
    }
}

export const setQueue= album => {
    return {
        type: SET_QUEUE, 
        album
    }
}


const initialState = {
    isPlaying: false,
    queue: [],
    currentSong: 0
}


const playbarReducer = (state = initialState, action) => {
    const newState = {...state}
    switch(action.type) {
        case PLAY: 
            return {...newState, isPlaying: true}
        case PAUSE: 
            return {...newState, isPlaying: false}
        case SET_CURRENT_SONG:
            return {...newState, isPlaying: true, currentSong: action.song }
        case SET_QUEUE:
            return {...newState, queue: action.album.albumSongs }    
        default: 
            return state;     
    }    
}

export default playbarReducer;


