import "./StaticAlbumItem.css"

const StaticAlbumItem = ( { album } ) => {
    return (
        <>
            <div >
                <img className="testing-static-album" src={album.albumCover}/>
                {/* <div>{album.title}</div>
                <div>{album.artistName}</div> */}
            </div>
        </>
    )
}

export default StaticAlbumItem;