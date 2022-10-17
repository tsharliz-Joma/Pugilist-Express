import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import _ from 'underscore'
import { Link } from 'react-router-dom'
// import SearchBar from './SearchBar';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './SearchBar.css'
import './Matchbout.css'

import{ FcSearch } from 'react-icons/fc'

const MatchBout = () => {

    const fighterCollectionRef = collection(db, 'Fighters'); 

    const [ awaitReply, setAwaitReply ] = useState(
       <div>
           
       </div>
    );

    const [ filteredFighters, setFilteredFighters ] = useState([]);
    const [ fighters, setFighters ] = useState([]);
    const [ fightRequest, setFightRequest ] = useState(false);
    const [ location, setLocation ] = useState('');
    const [searching, setSearching] = useState(false)
    const [ weight, setWeight ] = useState(0);
    const [ time, setTime ] = useState(null);
    const [ date, setDate ] = useState(null)

   const filterSearch = (e) =>{
       // setSearch_Query(e.target.value); // This is async so the first value is an empty srting, async functions function the following event loop not the current 
        //console.log(e.target.value)
        setSearching(true)
       const filteredData = fighters.filter((fighter) => {
           console.log(fighter)
           return fighter.username.toLowerCase().includes(e.target.value.toLowerCase())
       });

       if(e.target.value === ""){
           setFilteredFighters([])
           setSearching(false)
       } else {
       setFilteredFighters(filteredData)
       }
   }
   
   useEffect(() => {
       const getFighters = async () => {
           try {
               const response = await getDocs(fighterCollectionRef)
               const responseData = _.sortBy((response.docs.map((fighter) => ({ ...fighter.data(), id: fighter.id }))), 'wins ')
                 setFighters(responseData)
           } catch(error){
               console.log(error)
           }
       };
       getFighters();
   }, []);

   const loadRequest = (e) => {
       e.preventDefault();
       setFightRequest(true);
       
       //console.log('lets fight')
   }

   const sendRequest = () =>{

       setAwaitReply(
           <div>
               Request sent, await their reply.
           </div>
       )
       setTimeout(() => { 
           setFightRequest(false)
           setAwaitReply(
               <div>

               </div>
           )
       }, 3000)
   }

   const cancelRequest = () => {
       setFightRequest(false)
   }

    return(

        <div className="container-f bout-search-body  ">

            <div className='text-center container-fluid font-mono fs-1  bg-gradient '>
                <div className='text-white fs-1'>Pugilist Express</div>
            </div>
            
            <div className='bout-container mx-auto'>
                <div className='bout-title text-start font-mono fw-bolder'>Pick a fight</div>
                <div className='container search-bar-body '>

                <div className='search-input-box pt-3 font-monospace '>
                    <input type='text' 
                    placeholder='Search'
                    onChange={ filterSearch }
                    /><FcSearch className='fs-2' />
                </div>
    
            </div>

                <Link to="/" className="home-button btn btn-dark mt-5">
                Home
                </Link>
            </div>

            <div className={`${searching ? 'results-display-div mx-auto border border-top-0' : 'd-none'}`}>
                <span className={`${searching ? 'fs-2 font-monospace' : 'd-none'} `}>Results...</span>
                    <div className={`request font-monospace mx-auto`}>
                    { fightRequest && 
                        <div className='container fight-request-body mx-auto'>
                            <div className='fight-request-container'>
                                <div className='title'>Send Request</div> 
                                <form>
                                    <div className='fight-user-info'>
                                        <div className='fight-input-box'>
                                            <label htmlFor='location ' className='request-details'>Location:
                                                <input id="location" type="text" />
                                            </label>
                                        </div>
                                        <div className='fight-input-box'>
                                            <label htmlFor="weight" className='request-details'>Weight:
                                                <input id="weight" type="number" />
                                            </label>
                                        </div>
                                        <div className='fight-input-box'>
                                            <label htmlFor="time" className='request-details'>Time:
                                                <input id="time" type="time" />
                                            </label>
                                        </div>
                                        <div className='fight-input-box' >
                                            <label htmlFor='date' className='request-details'>Date:
                                                <input id="date" type="date" />
                                            </label>
                                        </div>
                                    </div>
                                    { awaitReply }
                                    
                                    </form>
                                    <button onClick={ cancelRequest } className='request-button btn btn-light'>Cancel</button>
                                    <button onClick={ sendRequest } className='request-button btn btn-light'>Send</button>
                            </div>
                        </div>
                    }
                    </div>
            {fighters.length !== 0 && (
                <div className={`${searching ? 'results' : 'd-none'}`}>
                    <a onClick={ loadRequest } 
                    className='data-item' href='/'>
                        {filteredFighters.map((f) => <p className='select-fighter ' key={f.id}> -- >  {f.username} </p>)}
                    </a>
                </div>
                )}
            </div>

            <footer className='fixed-bottom bg-gradient '>
                <ul className="container text-center">
                        <div className="row text-dark mono-text">
                            <li className=" col"><a className="link-light" href="https://www.boxingvic.org.au/home/" target='_blank' >Boxing VIC </a></li>
                            <li className=" col"><a className="link-light" href="https://www.boxingqueenslandinc.org/home/" target='_blank'>Boxing QLD</a></li>
                            <li className=" col"><a className="link-light" href="https://www.boxingsa.org.au/home/" target='_blank'>Boxing SA</a></li>
                        </div>
                        <div className="row mono-text">
                            <li className=" col"><a className="link-light" href="https://www.boxingwa.org.au/home/" target='_blank'>Boxing WA</a></li>
                            <li className=" col"><a className="link-light" href="https://www.boxingact.org.au/home/" target='_blank'>Boxing ACT</a></li>
                        </div>
                    </ul>
            </footer>

        </div>
        
    )
}

export default MatchBout 