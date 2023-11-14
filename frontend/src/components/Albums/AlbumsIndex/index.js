import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbums } from "../../../store/albums";
import { useEffect } from "react";
import "./AlbumsIndex.css"
import AlbumIndexItem from "../AlbumsIndexItem";

const AlbumsIndex = () => {
    const dispatch = useDispatch();
    const albums = useSelector(getAlbums)
    const currentUser = useSelector(state => state.session.user)
    

    useEffect(() => {
        if (currentUser) {
            dispatch(fetchAlbums())
        }
    }, [])

    return (
        <>
                <div className="index-header">Albums</div>
            {currentUser && (
                <div className="index-container">
                    {albums.map(album => <AlbumIndexItem  album={album}/>)}
                </div>
        )}
        </>


    )
}

export default AlbumsIndex;