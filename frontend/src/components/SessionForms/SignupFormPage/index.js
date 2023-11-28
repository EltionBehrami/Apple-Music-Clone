import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { signup } from "../../../store/session";
import './SignupFormPage.css';
import { closeModal } from "../../../store/modal";


const SignupFormPage = ({ modal }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [email, setEmail] = useState("");
    const sessionUser = useSelector(state => state.session.user);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/"/>



    const handleSubmit = async e => {
        e.preventDefault();
        if (confirmPassword === password){
            setErrors([]); 
            return dispatch(signup({firstName, lastName, birthdate, email, password}))
                .catch(async (res) => {
                    let data;
                    try{
                        data = await res.clone().json()
                    } catch {
                        data = await res.text();
                    }
                    if (data?.errors) setErrors(data.errors)
                    else if (data) setErrors([data]); 
                    else setErrors([res.statusText])
                })
        }
        return setErrors(["Password fields must match"])
    }


    return (
        <>
        <div className="signup-form-container">
            <div className="signup-exit"> <button className="exit-button" onClick={() => dispatch(closeModal("null"))}> X </button> </div>
            <form onSubmit={handleSubmit} className="signup-form">
                
                    <div className="cherry-id">Create Cherry ID</div>
                    <ul className="signup-errors">
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                    <div className="signup-form-items"> 
                        <input id="signup-email"type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} required />
                        <div className="subheader">This email address will become your Cherry ID. </div>
                        <input id="signup-password"type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} required />
                        <div className="subheader">Your password must have at least 6 characters.</div>
                        <input id="signup-confirm-password"type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.currentTarget.value)} required />
                        <input id="signup-firstname"type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} required />
                        <input id="signup-lastname"type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} required />
                        <input id="signup-birthdate"type="date" placeholder="Birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
                        <button className="submit-button" type="submit">Sign Up</button>
                    </div>
            </form>
            <div className="signup-logo"> </div>
        </div>
        <div className="submit"></div>
        </>
    )

}

export default SignupFormPage;
