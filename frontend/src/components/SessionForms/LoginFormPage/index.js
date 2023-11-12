import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/session";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import './LoginFormPage.css';
import { closeModal } from "../../../store/modal";


const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);





    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = e => {
        e.preventDefault();
        return dispatch(login({ email, password }))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone.json(); 
                } catch {
                    data = await res.text(); 
                }
                if (data?.errors) setErrors(data.errors)
                else if (data) setErrors([data]);
                else setErrors([res.statusText])
            });
    };


    return (
            <form onSubmit={handleSubmit} className="login-form">
                <ul className="errors">
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <div className="form-items">
                    {/* <div className="logo"> Cherry </div> */}
                    <div className="header-login">Sign In</div>
                    <div className="subtitle">Enter your email and password to get started.</div>
                        <input id="login-email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input id="login-password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button className="login-button" type="submit">L</button>
                        <button className="exit-button" onClick={() => dispatch(closeModal("null"))}> X </button>
                </div>
            </form>      
    );


};


export default LoginFormPage; 