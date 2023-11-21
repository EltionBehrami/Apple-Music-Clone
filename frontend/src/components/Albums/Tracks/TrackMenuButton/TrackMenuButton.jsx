import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./TrackMenuButton.css"
import { openModal } from "../../../../store/modal";

const TrackMenuButton = () => {

    const dispatch = useDispatch(); 
    const [showTrackMenu, setShowTrackMenu] = useState(false)

    const openTrackMenu = () => {
        if (showTrackMenu) return;  
            setShowTrackMenu(true)
    }

    useEffect  (() => {
        if (!showTrackMenu) return;

        const closeTrackMenu = e => {
                setShowTrackMenu(false)
        }
            document.addEventListener("click", closeTrackMenu)
    
            return () => document.removeEventListener("click", closeTrackMenu)

            
    }, [showTrackMenu])


    return (
        <>
            <svg id="track-button" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"  onClick={openTrackMenu}>
                <path d="M10.105 14c0-.87-.687-1.55-1.564-1.55-.862 0-1.557.695-1.557 1.55 0 .848.695 1.55 1.557 1.55.855 0 1.564-.702 1.564-1.55zm5.437 0c0-.87-.68-1.55-1.542-1.55A1.55 1.55 0 0012.45 14c0 .848.695 1.55 1.55 1.55.848 0 1.542-.702 1.542-1.55zm5.474 0c0-.87-.687-1.55-1.557-1.55-.87 0-1.564.695-1.564 1.55 0 .848.694 1.55 1.564 1.55.848 0 1.557-.702 1.557-1.55z" class="svelte-1wt9ndy"></path>
            </svg>
            {showTrackMenu && (
                <ul className="track-dropdown">
                    <button id="create-playlist-button" onClick={() => dispatch(openModal("create_playlist"))}>New Playlist</button>
                </ul>
            )}
        </>
    )
}

export default TrackMenuButton;