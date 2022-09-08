
import React from 'react'
import './LandingPage.css'
import MyCarousel from './Carousel'
import NewsLetter from '../NewLetter/NewsLetter.js'

const LandingPage = () => {
    return(
        <div className='landing-body'>
            <MyCarousel /> 
            <NewsLetter />
        </div>
        
    )
}

export default LandingPage 