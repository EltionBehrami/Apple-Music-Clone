import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { deletePlaylist, fetchPlaylist, getPlaylist, updatePlaylist } from "../../../store/playlists";
import { openModal, setPlaylistId } from "../../../store/modal";
import PlaylistMenuButton from "./PlaylistMenuButton";
import { fetchPlaylistSongs, getPlaylistSongs } from "../../../store/playlistSongs";
import TracksIndex from "../../Albums/Tracks/TracksIndex";
import { fetchSongs } from "../../../store/songs";
import "./PlaylistShow.css"




const PlaylistShow = () => {

    const { playlistId } = useParams(); 
    const playlist = useSelector(getPlaylist(playlistId))
    const dispatch = useDispatch();  
    const currentUser = useSelector(state => state.session.user)
    const history = useHistory();
    const songs = useSelector(getPlaylistSongs(playlistId))


    useEffect(() => {
            dispatch(fetchPlaylist(playlistId))
            dispatch(fetchPlaylistSongs(playlistId))
    }, [dispatch, playlistId])

    const handleClick = () => {
        dispatch(openModal("edit_playlist"))
        dispatch(setPlaylistId(playlist))
        dispatch(fetchSongs());
    }

    const handleDeletePlaylist = () => {
        dispatch(deletePlaylist(playlistId))
        history.push("/playlists");
    };

    
    return (
        <>
            <div className="playlist-show-container">
                <div className="playlist-show-header">
                    <div id="playlist-cover-container"><img className="playlist-show-cover" src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/67/f8/0c/67f80cef-4d4e-4792-1c69-c1d614065005/197189165450.jpg/296x296bf.webp"/> </div>
                    <div id="playlist-show-right-header"> 
                        <div className="playlist-header">
                            <div className="playlist-header-title" > {playlist?.title} </div>
                            <div className="playlist-owner"> {`${currentUser.firstName} ${currentUser.lastName}`}</div>
                            <div className="album-genre" > {playlist?.description} </div>
                        </div>
                        <div id="playlist-play"> 
                            <button onClick={handleClick} id="playlist-play-button" > Play </button>
                            <PlaylistMenuButton handleDeletePlaylist={handleDeletePlaylist} />
                        </div>
                    </div>
                </div>
                <div className="playlist-songs-container">
                {playlist && (
                        <TracksIndex album={playlist} songs={songs}/>
                    )}
                </div>
            </div>
        </>

    )

}

export default PlaylistShow;