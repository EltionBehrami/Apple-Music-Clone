import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import './LoginFormPage.css';


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
                    <p>Cherry</p>
                    <h1>Sign in</h1>
                    <p>Enter your email and password to begin</p>
                    <div className="auth-input">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit">Login</button>
                </div>
            </form>      
    );


};


export default LoginFormPage; 