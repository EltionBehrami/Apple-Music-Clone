
export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'

export const playSong = songId => {
    return {
        type: PLAY,
        songId
    }
}

export const pauseSong = songId => {
    return {
        type: PAUSE,
        songId
    }
}


const initialState = {
    isPlaying: false 
}

const playbarReducer = (state = initialState, action) => {
    const newState = {...state}
    switch(action.type) {
        case PLAY: 
            return {...newState, isPlaying: true}
        case PAUSE: 
            return {...newState, isPlaying: false}
        default: 
            return state;     
    }    
}

export default playbarReducer;


