import { fetchArtists, getArtist } from "../../../store/artist";
import "./AlbumsIndexItem.css"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";


const AlbumIndexItem = ( { album } ) => {

    const artistId  = album.artistId
    const artist = useSelector(getArtist(artistId))



    



    return (
        <>
            <div className="album-index-item">
                <img className="album-cover" src={album.albumCover}/>
                <div className="album-title">{album.title}</div>
                <div className="album-artist-index">{album.artistName}</div>
            </div>
        </>
    )
}

export default AlbumIndexItem;