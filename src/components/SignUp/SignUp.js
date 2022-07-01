import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Your password do not match');
        }

        if (password.length < 6) {
            setError('Your password must 6 characters or longer');
        }

        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/shop');
    }

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-tittle'>Sign Up</h3>
                <form onSubmit={handleCreateUser}>
                    <div className="label-group">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="label-group">
                        <label htmlFor="Password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="label-group">
                        <label htmlFor="Confirm Password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <input className='submit-btn' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already Have an Account? <Link id='signup-link' to='/login'>Login</Link>
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

export default SignUp;