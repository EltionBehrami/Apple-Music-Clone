import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./nav.css"

const Navigation = () => {

    return (
        <>
            <div className="left-container">
                    <NavLink id="home" to="/">Cherry Music</NavLink>
                    <ul className="library-links">
                        <button id="album-link"><NavLink to="/albums" className="inactive-link" activeClassName="active-albums-link"> Albums</NavLink></button>
                        <button id="song-link"><NavLink to="/songs" className="inactive-link" activeClassName="active-songs-link"> Songs</NavLink></button>
                    </ul>
                    <ul className="playlist-links">
                        <button id="playlists-link"><NavLink to="/playlists" className="inactive-link" activeClassName="active-playlists-link">Playlists</NavLink></button>
                    </ul>
            </div>
        </>
    )
}

export default Navigation;


