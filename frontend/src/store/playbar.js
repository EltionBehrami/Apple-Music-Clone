
export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'
export const SET_CURRENT_SONG = "SET_CURRENT_SONG"

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


const initialState = {
    isPlaying: false,
    currentSong: null 
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
        default: 
            return state;     
    }    
}

export default playbarReducer;


