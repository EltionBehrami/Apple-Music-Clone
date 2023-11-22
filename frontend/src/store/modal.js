export const OPEN_MODAL = 'OPEN_MODAL'; 
export const CLOSE_MODAL = 'CLOSE_MODAL'; 
export const PLAYLIST_ID = 'PLAYLIST_ID'; 

export const openModal = modal => {
    return{
        type: OPEN_MODAL, 
        modal
    }
    
}

export const closeModal = modal => {
    return{
        type: CLOSE_MODAL, 
        modal
    }
}

export const setPlaylistId = playlist => {
    return{
        type: PLAYLIST_ID, 
        playlist
    }
}


const modalReducer = (state = null, action) => {
    const newState = {...state}
    switch (action.type){
        case OPEN_MODAL: 
            newState["modal"] = action.modal; 
            return newState;
        case CLOSE_MODAL: 
            newState["modal"] = action.modal;
            return newState; 
        case PLAYLIST_ID:
            return { ...newState, playlistId: action.playlist.id };
        default: 
            return state;             
    }
}

export default modalReducer;