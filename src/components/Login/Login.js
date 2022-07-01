import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-tittle'>Login</h3>
                <form onSubmit={handleLogin}>
                    <div className="label-group">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="label-group">
                        <label htmlFor="Password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {
                            error?.message
                        }
                    </p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='submit-btn' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-Jonh? <Link id='signup-link' to='/signup'>Create New Account</Link>
                </p>
                <div className="divider">
                    <div className="or"></div>
                    <span>or</span>
                    <div className="or"></div>
                </div>
                <button id="loginWithGoogle">
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default Login;