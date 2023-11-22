import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./PlaylistMenuButton.css"

const PlaylistMenuButton = ( { handleDeletePlaylist }) => {

    const dispatch = useDispatch(); 
    const [showPlaylistMenu, setShowPlaylistMenu] = useState(false)

    const openPlaylistMenu = () => {
        if (showPlaylistMenu) return;  
            setShowPlaylistMenu(true)
    }

    useEffect  (() => {
        if (!showPlaylistMenu) return;

        const closePlaylistMenu = e => {
                setShowPlaylistMenu(false)
        }
            document.addEventListener("click", closePlaylistMenu)
    
            return () => document.removeEventListener("click", closePlaylistMenu)

            
    }, [showPlaylistMenu])


    return (
        <>
            <svg id="playlist-button" onClick={openPlaylistMenu}width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                <circle fill="var(--iconCircleFill, #2a2a2a)" cx="14" cy="14" r="14"></circle>
                                <path fill="var(--iconEllipsisFill, #d60117)"d="M10.105 14c0-.87-.687-1.55-1.564-1.55-.862 0-1.557.695-1.557 1.55 0 .848.695 1.55 1.557 1.55.855 0 1.564-.702 1.564-1.55zm5.437 0c0-.87-.68-1.55-1.542-1.55A1.55 1.55 0 0012.45 14c0 .848.695 1.55 1.55 1.55.848 0 1.542-.702 1.542-1.55zm5.474 0c0-.87-.687-1.55-1.557-1.55-.87 0-1.564.695-1.564 1.55 0 .848.694 1.55 1.564 1.55.848 0 1.557-.702 1.557-1.55z"></path>
            </svg>
            {showPlaylistMenu && (
                <ul className="playlist-dropdown">
                    <button id="delete-playlist-button" onClick={handleDeletePlaylist}>Delete Playlist</button>
                </ul>
            )}
        </>
    )
}

export default PlaylistMenuButton;