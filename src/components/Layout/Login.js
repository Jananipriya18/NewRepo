import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Styles.css';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && pass) {
            console.log(email);
            navigate("/home");
        }
    }

    const register = () => {
        navigate("/register");
    }

    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
                    <button type="submit" className='logInbtn'>Log In</button>
                </form>
                <button className="link-btn" onClick={register}>Don't have an account? Register here.</button>
            </div>
        </div>
    )
}

export default Login; 
