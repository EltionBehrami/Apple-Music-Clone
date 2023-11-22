import csrfFetch from "./csrf";

export const RECEIVE_PLAYLIST_SONG = "RECEIVE_PLAYLIST_SONG"

export const receivePlaylistSong = (song) => {
    return {
        type: RECEIVE_PLAYLIST_SONG,
        song
    }
}

export const RECEIVE_PLAYLIST_SONGS = "RECEIVE_PLAYLIST_SONGS"

export const receivePlaylistSongs = (songs) => {
    return {
        type: RECEIVE_PLAYLIST_SONGS,
        songs
    }
}



export const getPlaylistSongs = playlistId => state => {
    const songs = [];

    Object.values(state.songs).forEach(song => {
      const isInPlaylist = Object.values(state.playlistSongs).some(entry => entry.playlistId === playlistId && entry.songId === song.id);

      if (isInPlaylist) {
        songs.push(song);
      }
    });

    return songs;
};


// export const getPlaylistSongs = playlistId => state => {
//     const songs = [];
//     console.log('state.songs:', state.songs);
//     console.log('state.playlistSongs:', state.playlistSongs);

//     Object.values(state.songs).forEach(song => {
//       if (state.playlistSongs.includes(song.id)) {
//         songs.push(song);
//       }
//     });

//     console.log('selected songs:', songs);
//     return songs;
//   };


// export const getPlaylistSongs = playlistId => state => {
//     const songs = [];

//     state.playlistSongs.forEach(entry => {
//       if (entry.playlist_id === playlistId && state.songs[entry.song_id]) {
//         songs.push({ ...state.songs[entry.song_id], playlistSongId: entry.id });
//       }
//     });
//     return songs;
//   };



const addToPlaylist = (playlistId, songId) => async dispatch => {
    const response = await csrfFetch(`/api/playlists_songs/`, {
        method: "POST", 
        body: JSON.stringify ({
            songId: songId, 
            playlistId: playlistId,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok){
        const data = await response.json(); 
        dispatch(receivePlaylistSong(songId))
    }
}


export const fetchPlaylistSongs = () => async dispatch => {
    const response = await csrfFetch("/api/playlist_songs")
    if (response.ok){
        const data = await response.json()
        dispatch(receivePlaylistSongs(data))
    }
}




const playlistSongsReducer = (state = {}, action) => {
        const newState = {...state}
        switch (action.type){
            case RECEIVE_PLAYLIST_SONGS: 
                return {...action.songs}
            default: 
                return state;     
        }
}   

export default playlistSongsReducer;