import LoginFormPage from "../SessionForms/LoginFormPage";
import SignupFormPage from "../SessionForms/SignupFormPage";
import { closeModal } from "../../store/modal";
import { useDispatch, useSelector } from "react-redux";
import PlaylistForm from "../Playlists/PlaylistForm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./modal.css"



const Modal = () => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal?.modal);
    const playlistId = useSelector(state => state.modal?.playlistId);

    if (!modal) {
        return null
    }

    let component;
    let modalClass = "modal-child"

    switch (modal) {
        case 'login':
            component = <LoginFormPage modal={"null"}/>;
            break;
        case 'signup':
            component = <SignupFormPage  modal={"null"} />;
            break;
        case 'create_playlist':
            component = <PlaylistForm  modal={"null"}/>
            modalClass = "small-modal-child"
            break;
        case 'edit_playlist': 
            component = <PlaylistForm playlistId={playlistId}  modal={"null"}/>
            modalClass = "small-modal-child"
        break;

        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={() => dispatch(closeModal("null"))}>
            <div className={modalClass} onClick={e => e.stopPropagation()}>
                { component }
            </div>

        </div>
    );
}



export default Modal; 