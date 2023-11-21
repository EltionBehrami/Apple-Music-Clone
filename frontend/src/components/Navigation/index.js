import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylists } from "../../store/playlists";
import { useEffect } from "react";
import "./nav.css"

const Navigation = () => {



    const playlists = useSelector(state => state.playlists)
    const playlistsArray = Object.values(playlists)
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, [])

    debugger

    return (
        <>
            <div className="left-container">
                    <NavLink id="home" to="/">Cherry Music</NavLink>
                    <ul className="library-links">
                        <button id="album-link"><NavLink to="/albums" className="inactive-link" activeClassName="active-albums-link"> Albums</NavLink></button>
                        <button id="song-link"><NavLink to="/songs" className="inactive-link" activeClassName="active-songs-link"> Songs</NavLink></button>
                    </ul>
                    <ul className="playlist-links"></ul>
                        <button id="playlists-link"><NavLink to="/playlists" className="inactive-link" activeClassName="active-playlists-link">Playlists</NavLink></button>
                        {playlistsArray.map(playlist => <button className="playlist-link"> <NavLink to={`/playlists/${playlist.id}`} className="inactive-link"  activeClassName="active-playlists-link">{playlist.title}</NavLink></button>)}
                    
            </div>
        </>
    )
}

export default Navigation;


