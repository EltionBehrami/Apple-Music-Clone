import { useDispatch } from "react-redux";
import "./AccessModal.css"
import { closeModal, openModal } from "../../store/modal";

const AccessModal = ({ modal }) => {
    const dispatch = useDispatch(); 


    return (
        <div className="access-modal-container">
            <div className="access-top-container">
            <div className="signup-exit"> <button className="exit-button" onClick={() => dispatch(closeModal("null"))}> X </button> </div>
            </div>
            <div className="access-art-container">
            <div className="left-small-art">
                <div className="leftmost-art-container">
                    <div className="top-leftmost-art-container"></div>
                    <div className="bottom-leftmost-art-container"></div>
                </div>
                <div className="left-art-container">
                    <div className="top-left-art-container"></div>
                    <div className="bottom-left-art-container"></div>
                </div>
            </div>
                <div className="middle-art-container"></div>
                <div className="right-small-art">
                    <div className="right-art-container">
                        <div className="top-right-art-container" ></div>
                        <div className="bottom-right-art-container"></div>
                    </div>
                    <div className="rightmost-art-container">
                        <div className="top-rightmost-art-container" ></div>
                        <div className="bottom-rightmost-art-container"></div>
                    </div>
                </div>
            </div>
            <div className="access-words-container">
                <div className="cherry-music-access"> Cherry Music </div>
                <div className="signup-text"> Unlock the full spectrum of music with Cherry Music! Sign up now to dive into a personalized song streaming experience, where you're in control. Create your own playlists, and enjoy the rhythm of a platform tailored to your taste. Join Cherry Music today.</div>
                <button id="signup-now" onClick={() => dispatch(openModal("signup"))}>Sign Up Now</button>
            </div>
        </div>
    )
}

export default AccessModal; 