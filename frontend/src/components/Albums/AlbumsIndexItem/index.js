import "./AlbumsIndexItem.css"

const AlbumIndexItem = ( { album } ) => {
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