
export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'
export const SET_CURRENT_SONG = "SET_CURRENT_SONG"
export const SET_QUEUE = "SET_QUEUE"
export const SET_SONG_QUEUE = "SET_SONG_QUEUE"
export const SET_PLAYLIST_QUEUE = "SET_PLAYLIST_QUEUE"
export const NEXT = "NEXT"
export const PREVIOUS = "PREVIOUS"
export const SHUFFLE = "SHUFFLE"
export const UNSHUFFLE = "UNSHUFFLE"

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

export const nextSong = () => {
    return {
        type: NEXT,
    }
}
export const previousSong = () => {
    return {
        type: PREVIOUS,
    }
}

export const shuffleQueue = () => {
    return {
        type: SHUFFLE,
    }
}
export const unshuffleQueue = () => {
    return {
        type: UNSHUFFLE,
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

export const setPlaylistQueue= album => {
    return {
        type: SET_PLAYLIST_QUEUE, 
        album
    }
}

export const setSongQueue = songId => {
    return {
        type: SET_SONG_QUEUE,
        songId 
    }
}


const initialState = {
    isPlaying: false,
    queue: [],
    originalQueue: [],
    initialQueue: [],
    currentSong: 0,
    currentSongIndex: 0
}


const playbarReducer = (state = initialState, action) => {
    const newState = {...state}
    switch(action.type) {
        case PLAY: 
            return {...newState, isPlaying: true}
        case PAUSE: 
            return {...newState, isPlaying: false}
        case SET_CURRENT_SONG:
            return {...newState, isPlaying: true, currentSong: action.song, currentSongIndex: state.queue.indexOf(action.song.id)}
        case SET_QUEUE:
            return {...newState, queue: action.album.albumSongs, album: action.album, initialQueue: action.album.albumSongs }    
        case SET_PLAYLIST_QUEUE:
            return {...newState, queue: action.album.playlistSongs, initialQueue: action.album.playlistSongs }    
        case SET_SONG_QUEUE: 
            return {...newState, queue: [action.songId]}
        case NEXT:
            const nextIndex = state.currentSongIndex + 1;
            const isLastSong = nextIndex >= state.queue.length;
            return isLastSong
                ? { ...state }
                : { ...state, currentSongIndex: nextIndex };
        case PREVIOUS:
            const prevIndex = state.currentSongIndex - 1;
            return { ...state, currentSongIndex: prevIndex }; 
        case SHUFFLE:
            if (state.queue.length > 0) {
            const currentSong = state.queue[state.currentSongIndex];
            const originalOrder = state.originalQueue.length > 0 ? state.originalQueue : state.queue;
    
            const shuffledQueue = [...originalOrder];
    
            for (let i = shuffledQueue.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledQueue[i], shuffledQueue[j]] = [shuffledQueue[j], shuffledQueue[i]];
            }
    
            const newCurrentSongIndex = shuffledQueue.indexOf(currentSong);
            return { ...newState, queue: shuffledQueue, originalQueue: originalOrder, currentSongIndex: newCurrentSongIndex };
            }
            return state;

        case UNSHUFFLE:
            if (state.originalQueue.length > 0) {
                const currentSong = state.queue[state.currentSongIndex];
                const newCurrentSongIndex = state.originalQueue.indexOf(currentSong);
                return { ...newState, queue: state.originalQueue, originalQueue: [], currentSongIndex: newCurrentSongIndex };
            }
            return state;
        default: 
            return state;     
    }    
}

export default playbarReducer;


