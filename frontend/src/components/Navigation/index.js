import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "./ProfileButton";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modal";



const Navigation = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks; 
    if (sessionUser) {
        sessionLinks = (<ProfileButton user={sessionUser} />)
    } else {
        sessionLinks = (
            <>
                <button onClick={() => dispatch(openModal('login'))}>LOGIN</button>
                <button onClick={() => dispatch(openModal('signup'))}>SIGN UP</button>

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