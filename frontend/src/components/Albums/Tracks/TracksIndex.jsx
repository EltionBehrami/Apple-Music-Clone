import TracksIndexItem from "./TracksIndexItem"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setPlaylistQueue } from "../../../store/playbar";
import { setQueue } from "../../../store/playbar";
import "./TracksIndex.css"
import { openModal } from "../../../store/modal";

const TracksIndex = ( {album, songs, playlist} ) => {

    const [activeItemId, setActiveItemId] = useState(null)
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)

    const handleItemClick = (song) => {
        setActiveItemId(song.id === activeItemId ? null : song.id);
        if (currentUser) {
            if (album) {
                dispatch(setQueue(album));
                dispatch(setCurrentSong(song));
            }
            if (playlist) {
                dispatch(setPlaylistQueue(playlist));
                dispatch(setCurrentSong(song));
            }
        } else {
            dispatch(openModal("gain_access"));
        }
    };

    return (
        <ul className="tracks-index-container ">
            {Object.values(songs).map((song, index) => 
            <li key={song.id} onClick={() => handleItemClick(song)} className={index % 2 === 0 ? 'even' : 'odd'}>
                <TracksIndexItem 
                    track={song}   
                    isActive={song.id === activeItemId}
                    handleItemClick={handleItemClick}
                    album={album}
                    playlist={playlist}
                />
            </li>)}
        </ul> 
    )
}

export default TracksIndex 


