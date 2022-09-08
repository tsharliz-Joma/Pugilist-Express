import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';
import './SearchBar.css'
import './Matchbout.css'

const MatchBout = () => {
    return(
       
            
            
        <div className="container text-center bout-search-body ">
            <div className='bout-container'>
            <div className='bout-title'>Pick a fight</div>
                <SearchBar />
                <Link to="/" className="home-button btn btn-dark">
                Home
                </Link>
            </div>
        </div>
        
    )
}

export default MatchBout 