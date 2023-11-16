import TracksIndexItem from "./TracksIndexItem"
import "./TracksIndex.css"

const TracksIndex = ( {album} ) => {

    const tracks = album.albumSongs

    return (
        <ul className="tracks-index-container ">
            {Object.values(album.albumSongs).map((song, index) => <li className={index % 2 === 0 ? 'even' : 'odd'}><TracksIndexItem track={song}/></li>)}
        </ul> 
    )
}

export default TracksIndex 