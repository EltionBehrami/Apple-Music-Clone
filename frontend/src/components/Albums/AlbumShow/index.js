import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchAlbum, getAlbum } from "/Users/eltionbehrami/apple_music_clone/frontend/src/store/albums.js";
import "./AlbumShow.css"
import SongsIndexItem from "../../Songs/SongsIndexItem";
import TracksIndexItem from "../Tracks/TracksIndexItem";
import TracksIndex from "../Tracks/TracksIndex";

const AlbumShow = () => {

    const { albumId } = useParams(); 
    const album = useSelector(getAlbum(albumId))
    const dispatch = useDispatch(); 
    
    debugger 
    
    useEffect(() => {
        dispatch(fetchAlbum(albumId))
        debugger
    }, [dispatch, albumId])

    
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
                        <div id="album-play"> <button id="album-play-button" > Play </button> </div>
                    </div>
                </div>
                <div className="album-songs-container">
                    {album && (
                        <TracksIndex album={album}/>
                        // Object.values(album.albumSongs).map(song => <TracksIndexItem track={song}/>)
                    )}
                </div>
            </div>
        </>

    )

}



export default AlbumShow; 