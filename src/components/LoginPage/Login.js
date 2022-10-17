import React, { useState } from 'react'
import { auth } from '../../firebase-config.js';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'



const Login = () => {

    const [ user, setUser ] = useState({});
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();

    const login = async (e) => {
        // e.preventDefault();
        try{
        const user = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        navigate('/')
        onAuthStateChanged( auth, (user)=>{
            setUser(user)
            if(user){
            // TEST: console.log(user)
            } else {
            // TEST: console.log('No user signed in ')
            }
        });
        // TEST: console.log(user)
        } catch(error) {
            console.log(error.message)
        }
    }

    return(
        <div className='container login-form-body'>
            <div className='login-form-container'>
                <div className='login-title mono-text'>Login</div>
                <form onSubmit={ login }>
                    <div className='login-user-info font-monospace'>
                        <div className='login-input-box'>
                            <label htmlFor="email" className='login-details'>Email:
                                <input onChange={(e) => setEmail(e.target.value)}
                                id="email" type="text" />
                            </label>
                        </div>
                        <div className='login-input-box'>
                            <label htmlFor="password" className='login-details'>Password:
                                <input onChange={(e) => setPassword(e.target.value)}
                                id="password" type="password" />
                            </label>
                        </div>
                    </div>
                    <button className='login-button btn-secondary mono-text' >Login</button>
                </form> 
                <Link to="/" className='nav-link mono-text ' >
                    Home
                </Link>
            </div>
        </div>

    )
}

export default Login