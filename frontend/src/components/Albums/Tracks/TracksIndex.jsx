import TracksIndexItem from "./TracksIndexItem"

const TracksIndex = ( {album} ) => {

    const tracks = album.albumSongs

    return (
        <div className="tracks-indexcontainer ">
            {Object.values(album.albumSongs).map(song => <TracksIndexItem track={song}/>)}
        </div> 
    )
}

export default TracksIndex 