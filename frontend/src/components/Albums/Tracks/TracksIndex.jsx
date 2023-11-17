import TracksIndexItem from "./TracksIndexItem"
import "./TracksIndex.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSong, pauseSong, setCurrentSong} from "../../../store/playbar";

const TracksIndex = ( {album} ) => {

    const [activeItemId, setActiveItemId] = useState(null)
    const dispatch = useDispatch();
    const isPlaying = useSelector(state => state.playbar.isPlaying)
    

    const handleItemClick = (song) => {
        setActiveItemId(song.id === activeItemId ? null : song.id);
        dispatch( isPlaying ? pauseSong() : playSong())
        dispatch(setCurrentSong(song))
    };


    return (
        <ul className="tracks-index-container ">
            {Object.values(album.albumSongs).map((song, index) => 
            <li className={index % 2 === 0 ? 'even' : 'odd'}>
                <TracksIndexItem 
                    track={song}   
                    key={song.id} 
                    isActive={song.id === activeItemId} 
                    onClick={() => handleItemClick(song)}
                />
            </li>)}
        </ul> 
    )
}

export default TracksIndex 