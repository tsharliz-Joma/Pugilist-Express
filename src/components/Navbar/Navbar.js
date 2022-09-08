import React, { useState, useEffect } from "react";
import './navbar.css'
import  { auth }  from "../../firebase-config"
import { onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom';




const NavBar = () => {

    const [ loggedIn, setLogin ] = useState(
        <div className="nav-button-container">
            <Link to='login' className="btn-left btn btn-dark">
                Login
            </Link>
        </div>
        );

    const [ register, setRegistration ] = useState(
        <div className="nav-button-container">
            <Link to='signup' className="btn-right btn btn-dark">
                Register
            </Link>
        </div>
    );

    const [ user, setUser ] = useState({});

    // useEffect or the page crahses everytime you try to navigate to home
useEffect(() => {
    onAuthStateChanged( auth, (currentUser) => {
        if(currentUser){
            setUser(currentUser)
            setLogin(
                <div className="nav-button-container">
                    <Link to='match-bout' className="nav-bar-button btn btn-light bld-font">
                        Match Bout
                    </Link>
                </div>
            );
            setRegistration(
                <div className="nav-button-container">
                    <Link to='sparring' className="nav-bar-button btn btn-light bld-font">
                        Sparring
                    </Link>
                </div>
            );
        }

    })
}, []);

    return(
        <nav className="navbar nav-bar-container">
            { loggedIn }
            <div className="text-center text-white welcome-heading">
                Welcome<br/>
                --{user.email}--
            </div>
            { register }
        </nav>
    )
}

export default NavBar
