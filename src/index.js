import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css'
import "bootstrap/dist/css/bootstrap.min.css" // This is a must if you want boostrap carousel to work 
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';



import MatchBout from '../src/components/MatchBout/MatchBout';
import Login from '../src/components/LoginPage/Login';
import SignUp from '../src/components/SignUpPage/SignUp';
import Sparring from '../src/components/Sparring/Sparring';
import {  Routes, Route,} from 'react-router'
import { HashRouter } from 'react-router-dom';

// const routes = (
//   <Router>
//     <Routes>
//       <Route path='/' element={ <LandingPage /> } />
//       <Route path='/login' element={ <Login />} />
//       <Route path='/signup' element={ <SignUp />} />
//     </Routes>
//   </Router>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <HashRouter>
    <Routes>
    {/* When the route is this, then render the App */}
      <Route path="/" element={<Home />} /> {/* So this makes the path available, its says render the App.js when the user tries to go to the '/' path*/}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="match-bout" element={<MatchBout />} />
      <Route path="sparring" element={<Sparring />} />
    </Routes>
  </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
