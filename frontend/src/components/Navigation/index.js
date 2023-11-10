import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux";

const Navigation = () => {
    
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks; 
    if (sessionUser) {
        sessionLinks = (<ProfileButton user={sessionUser} />)
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    } 

    


    return (
        <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            {sessionLinks}
            </li>
        </ul>   
    )
}

export default Navigation