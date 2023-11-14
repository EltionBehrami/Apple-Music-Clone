import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./nav.css"

const Navigation = () => {

    return (
        <>
            <div className="left-container">
                    <NavLink id="home" to="/">Cherry Music</NavLink>
                    <ul className="library-links">
                        {/* <li><NavLink to="/artists">Artists</NavLink></li>
                        <li><NavLink to="/albums">Albums</NavLink></li>
                        <li><NavLink to="/songs">Songs</NavLink></li> */}
                    </ul>
            </div>
        </>
    )
}

export default Navigation;


