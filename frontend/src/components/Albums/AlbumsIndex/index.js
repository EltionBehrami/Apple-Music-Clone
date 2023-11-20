import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbums } from "../../../store/albums";
import { useEffect } from "react";
import AlbumIndexItem from "../AlbumsIndexItem";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./AlbumsIndex.css"


const AlbumsIndex = () => {
    const dispatch = useDispatch();
    const albums = useSelector(getAlbums);
    const currentUser = useSelector(state => state.session.user);
    

    useEffect(() => {
        if (currentUser) {
            dispatch(fetchAlbums());
        }
    }, [dispatch]);


    return (
        <>
                <div className="index-header">Albums</div>
            {currentUser && (
                <div className="index-container">
                    {albums.map(album => <Link id="album-show-link" to={`/albums/${album.id}`}> <AlbumIndexItem  album={album}/></Link>)}
                </div>
        )}
        </>


    )
}

export default AlbumsIndex;