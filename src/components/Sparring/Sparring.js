import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../MatchBout/SearchBar';
import './Sparring.css'


const Sparring = () => {

    //IF i get the chance i want to have this search a different pool of fighters
    // Maybe and a status to the user when they sign up active/inactive or sparring

    return(
        <div className='container text-center sparring-search-body'>
            <div className='sparring-container'>
                <div className='sparring-title'>Sparring</div>
                <SearchBar />
                <Link to="/" className='home-button btn btn-dark'>
                    Home
                </Link>
            </div>
        </div>
    )
}

export default Sparring