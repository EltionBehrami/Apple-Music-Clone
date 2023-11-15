import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./nav.css"

const Navigation = () => {

    return (
        <>
            <div className="left-container">
                    <NavLink id="home" to="/">Cherry Music</NavLink>
                    <ul className="library-links">
                        <button id="album-link"><NavLink to="/albums" id="inactive-link" activeClassName="active-albums-link"> Albums</NavLink></button>
                    </ul>
            </div>
        </>
    )
}

export default Navigation;


