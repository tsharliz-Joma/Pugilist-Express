import React from 'react';
import Footer from './Footer/Footer';
import NavBar from './Navbar/Navbar';
import './index.css'
import LandingPage from './LandingPage/LandingPage';

function Home() {
  return (
    <div className="App">
      <div className='inner-app'>
        <NavBar />
        <div className='landing-page-title'>-------Pugilist Express-------</div>
        <LandingPage />
        <Footer /> 
        </div>
    </div>
  );
}

export default Home;
