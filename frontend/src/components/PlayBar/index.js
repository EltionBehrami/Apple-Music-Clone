import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "./ProfileButton";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modal";
import "./playbar.css"



const PlayBar = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks; 
    if (sessionUser) {
        sessionLinks = (<ProfileButton user={sessionUser} />)
    } else {
        sessionLinks = (
            <>
                <button id="login-button" onClick={() => dispatch(openModal('login'))}>Sign In</button>
                <button id="signup-button"onClick={() => dispatch(openModal('signup'))}>Sign Up</button>

            </>
        );
    } 

    


    return (
            <div className="nav-containers">
                <div className="left-container">
                    <NavLink id="home" to="/">Cherry Music</NavLink>
                    <ul className="library-links">
                        {/* <li><NavLink to="/artists">Artists</NavLink></li>
                        <li><NavLink to="/albums">Albums</NavLink></li>
                        <li><NavLink to="/songs">Songs</NavLink></li> */}
                    </ul>
                </div>

                <div className="playbar">
                    <li className="session-links">
                    {sessionLinks}
                    </li>    
                </div>
            </div>
        
    
    )
}

export default PlayBar;