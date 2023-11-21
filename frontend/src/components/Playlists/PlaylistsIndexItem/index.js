import "./PlaylistsIndexItem.css"

const PlaylistsIndexItem = ( { playlist } ) => {
    return (
        <>
            <div className="playlist-index-item">
                <img className="playlist-cover" src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/67/f8/0c/67f80cef-4d4e-4792-1c69-c1d614065005/197189165450.jpg/296x296bf.webp"/>
                <div className="playlist-title-index">{playlist?.title}</div>
            </div>
        </>
    )
}

export default PlaylistsIndexItem;