import React, { useEffect, useState }from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import _ from 'underscore'
import './SearchBar.css'







const SearchBar = (placeholder) => {

    const fighterCollectionRef = collection(db, 'Fighters'); 
     const [ awaitReply, setAwaitReply ] = useState(
        <div>
            
        </div>
     );

     const [ filteredFighters, setFilteredFighters ] = useState([]);
     const [ fighters, setFighters ] = useState([]);
     const [ fightRequest, setFightRequest ] = useState(false);
     const [ location, setLocation ] = useState('');
     const [ weight, setWeight ] = useState(0);
     const [ time, setTime ] = useState(null);
     const [ date, setDate ] = useState(null)

    const filterSearch = (e) =>{
        // setSearch_Query(e.target.value); // This is async so the first value is an empty srting, async functions function the following event loop not the current 
         //console.log(e.target.value)
        const filteredData = fighters.filter((fighter) => {
            console.log(fighter)
            return fighter.username.toLowerCase().includes(e.target.value.toLowerCase())
        });

        if(e.target.value === ""){
            setFilteredFighters([])
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

    // TEST: console.log(fighters)
    // TEST: console.log(search_Query)

        return(
            <div className='container search-bar-body '>
                <div className='search-input-box'>
                    <input type='text' 
                    placeholder='Search'
                    onChange={ filterSearch }
                    />
                    
                </div>
                <span className='display-fighters '>Results</span>
                <div className='request'>
                    { fightRequest && 
                        <div className='container  fight-request-body'>
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
                <div className='results'>
                    <a onClick={ loadRequest } 
                    className='data-item' href='/'>
                        {filteredFighters.map((f) => <p className='select-fighter' key={f.id}> {f.username} </p>)}
                    </a>
                </div>
                )}
            </div>
        )
    
}

export default SearchBar