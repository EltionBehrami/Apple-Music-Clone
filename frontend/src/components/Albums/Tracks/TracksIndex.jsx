import TracksIndexItem from "./TracksIndexItem"
import "./TracksIndex.css"
import { useState } from "react";

const TracksIndex = ( {album} ) => {

    const tracks = album.albumSongs
    const [activeItemId, setActiveItemId] = useState(null)

    const handleItemClick = (itemId) => {
        setActiveItemId(itemId === activeItemId ? null : itemId);
      };

    return (
        <ul className="tracks-index-container ">
            {Object.values(album.albumSongs).map((song, index) => <li className={index % 2 === 0 ? 'even' : 'odd'}><TracksIndexItem track={song} key={song.id} isActive={song.id ===activeItemId} onClick={() => handleItemClick(song.id)}/></li>)}
        </ul> 
    )
}

export default TracksIndex 