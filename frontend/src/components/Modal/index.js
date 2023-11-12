import LoginFormPage from "../SessionForms/LoginFormPage";
import SignupFormPage from "../SessionForms/SignupFormPage";
import { closeModal } from "../../store/modal";
import "./modal.css"
import { useDispatch, useSelector } from "react-redux";


const Modal = () => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal?.modal);

    if (!modal) {
        return null
    }

    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormPage />;
            break;
        case 'signup':
            component = <SignupFormPage />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={() => dispatch(closeModal("null"))}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>

        </div>
    );
}



export default Modal; 