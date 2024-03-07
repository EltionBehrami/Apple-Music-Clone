import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchAlbum, getAlbum, getAlbumSongs } from "../../../store/albums"
import { pauseSong, setCurrentSong, setPlaylistQueue } from "../../../store/playbar";
import { setQueue } from "../../../store/playbar";
import TracksIndex from "../Tracks/TracksIndex";
import { openModal } from "../../../store/modal";
import "./AlbumShow.css"

const AlbumShow = () => {

    const { albumId } = useParams(); 
    const album = useSelector(getAlbum(albumId))
    const songs = useSelector(getAlbumSongs(albumId))
    const firstSong = songs[0]
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();  
    const isPlaying = useSelector(state => state.playbar.isPlaying)
    
    const [activeItemId, setActiveItemId] = useState(null)

    useEffect(() => {
        dispatch(fetchAlbum(albumId))
    }, [dispatch, albumId])

    debugger

    const handleItemClick = (firstSong) => {
        setActiveItemId(firstSong.id === activeItemId ? null : firstSong.id);
        if (currentUser) {
            if (isPlaying) {
                dispatch(pauseSong())
            } else {
                dispatch(setCurrentSong(firstSong.id))
                dispatch(setQueue(album))
            }
        } else {
            dispatch(openModal("gain_access"))
        }
    };
    
    
    return (
        <>
            <div className="album-show-container">
                <div className="album-show-header">
                    <div id="album-cover-container"><img className="album-show-cover" src={album?.albumCover}/> </div>
                    <div id="album-show-right-header"> 
                        <div className="album-header">
                            <div className="album-header-title" > {album?.title} </div>
                            <div className="album-artist"> {album?.artistName}</div>
                            <div className="album-genre"> {album?.genre} </div>
                        </div>
                        <div id="album-play"> 
                            <button id="album-play-button" onClick={() => handleItemClick(firstSong)}> Play </button> 
                        </div>
                    </div>
                </div>
                <div className="album-songs-container">
                    {album && (
                        <TracksIndex album={album} songs={songs}/>
                    )}
                </div>
            </div>
        </>

    )

}



export default AlbumShow; 