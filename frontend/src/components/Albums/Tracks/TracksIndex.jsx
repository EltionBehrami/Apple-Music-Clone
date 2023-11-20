import TracksIndexItem from "./TracksIndexItem"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSong, pauseSong, setCurrentSong} from "../../../store/playbar";
import { setQueue } from "../../../store/playbar";
import "./TracksIndex.css"

const TracksIndex = ( {album, songs} ) => {

    const [activeItemId, setActiveItemId] = useState(null)
    const dispatch = useDispatch();
    

    const handleItemClick = (song) => {
        setActiveItemId(song.id === activeItemId ? null : song.id);
        dispatch(setCurrentSong(song.id))
        dispatch(setQueue(album))
    };

    

    return (
        <ul className="tracks-index-container ">
            {Object.values(songs).map((song, index) => 
            <li onClick={() => handleItemClick(song)} className={index % 2 === 0 ? 'even' : 'odd'}>
                <TracksIndexItem 
                    track={song}   
                    key={song.id} 
                    isActive={song.id === activeItemId}   
                />
            </li>)}
        </ul> 
    )
}

export default TracksIndex 


