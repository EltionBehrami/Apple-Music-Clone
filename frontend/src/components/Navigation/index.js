import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "./ProfileButton";

const Navigation = () => {
    
    return (
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <ProfileButton />
        </ul>
    )
}

export default Navigation