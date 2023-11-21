import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchPlaylist, getPlaylist } from "../../../store/playlists";
import "./PlaylistShow.css"



const PlaylistShow = () => {

    const { playlistId } = useParams(); 
    const playlist = useSelector(getPlaylist(playlistId))
    const dispatch = useDispatch();  
    const currentUser = useSelector(state => state.session.user)


    useEffect(() => {
            dispatch(fetchPlaylist(playlistId))
    }, [dispatch, playlistId])

    
    return (
        <>
            <div className="playlist-show-container">
                <div className="playlist-show-header">
                    <div id="playlist-cover-container"><img className="playlist-show-cover" src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/67/f8/0c/67f80cef-4d4e-4792-1c69-c1d614065005/197189165450.jpg/296x296bf.webp"/> </div>
                    <div id="playlist-show-right-header"> 
                        <div className="playlist-header">
                            <div className="playlist-header-title" > {playlist?.title} </div>
                            <div className="playlist-owner"> {`${currentUser.firstName} ${currentUser.lastName}`}</div>
                        </div>
                        <div id="playlist-play"> <button id="playlist-play-button" > Play </button> </div>
                    </div>
                </div>
                <div className="playlist-songs-container">
                    Playlist songs go here
                </div>
            </div>
        </>

    )

}

export default PlaylistShow;