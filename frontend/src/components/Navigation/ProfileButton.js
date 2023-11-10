import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';


const ProfileButton = () => {

    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        if (showMenu) return;
            setShowMenu(true)
    }

    
    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = e => {
                setShowMenu(false)
        }
            document.addEventListener("click", closeMenu)
    
            return () => document.removeEventListener("click", closeMenu)

            
    }, [showMenu])

    const logout = (e) => {
        e.preventDefault(); 
        dispatch(sessionActions.logout());
    };


    return (
        <>
            <button onClick={openMenu}>Profile Button</button>
            {showMenu && (
                <ul>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <button onClick={logout}>Logout</button>
                </ul>
            )}
        </>
    )
} 

export default ProfileButton; 