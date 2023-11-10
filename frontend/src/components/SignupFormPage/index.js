import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { signup } from "../../store/session";


const SignupFormPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const sessionUser = useSelector(state => state.session.user);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/"/>

    const handleSubmit = e => {
        let user = {name, email, password}
        if (confirmPassword === password){
            setErrors([]); 
            return dispatch(signup(user))
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
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label> Name 
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label> Email 
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label> Password 
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <label> Confirm Password 
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    )

}

export default SignupFormPage;
