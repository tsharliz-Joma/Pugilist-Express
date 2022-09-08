import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../../firebase-config';
import { getDoc, setDoc , doc} from "firebase/firestore"
import './SignUp.css'


const SignUp = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ age , setAge ] = useState(0);
    const [ boxingGym, setBoxingGym ] = useState('');
    const [ weight, setWeight ] = useState(0);
    const [ bouts, setNumOfFights ] = useState(0);
    const [ gender, setGender ] = useState('');
    const [ wins, setWins ] = useState(0);
    const [ loses, setLoses ] = useState(0);
    const [ exhibitions, setExhibitons ] = useState(0);
    const [ status, setActive ] = useState(false);
    const Navigate = useNavigate();

    

    const writeUserData = ( userid, name, age, wins, loses, boxingGym, weight, bouts, exhibitions, gender, active) => {
        const docRef = doc(db, 'Fighters', userid );
        active = status
        setDoc(docRef, {
            username: name,
            boxingGym: boxingGym,
            weight: weight,
            bouts: bouts,
            gender: gender, 
            active: active,
            age: age,
            wins: wins,
            loses: loses,
            exhibitions: exhibitions
        });
        // TEST: console.log(active)
    }


    const checkBoxValue = (e) => {
        if(e.target.checked){
            setActive(true) 
        } else {
            setActive(false)
        }
    }


    const register = async(e) => {
       e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            );
            writeUserData( user.user.uid, name, age, boxingGym, weight,loses, bouts, wins, exhibitions, gender, status )
            Navigate('/')
        } catch(error) {
            console.log(error.message)
            Navigate('/signup')
        }
    }

    return(
        <div className='container form-body'>
            <div className='form-container'>
            <div className='title'> Registration </div>

            <form onSubmit={ register }>
                <div className='user-info'>
                <div className='input-box'>
                    <label htmlFor='name' className='details'> Name:
                        <input onChange={(e) => {setName(e.target.value)}}
                        id="name"type="text"
                        placeholder='Enter your name'
                        />
                    </label>
                    </div>
                <div className='input-box'>
                    <label htmlFor="email" className='details'>Email:
                        <input onChange={(e) => {setEmail(e.target.value)}}
                        placeholder='Enter your Email'
                        id="email" type="text"
                        />
                    </label>
                    </div>
                <div className='input-box'>
                    <label htmlFor="passord" className='details'>Password:
                        <input onChange={(e) => {setPassword(e.target.value)}}
                        placeholder="Enter your Password"
                        id="password" type="password"
                        />
                    </label>
                    </div>
                    <div className='input-box'>
                    <label htmlFor='age' className='details'>Age:
                        <input onChange={(e) => {setAge(e.target.value)}}
                        placeholder="Current Age"
                        id="age" type="number"
                        />
                    </label>
                    </div>
                <div className='input-box'>
                    <label htmlFor='weight' className='details'>Weight:
                        <input onChange={(e) => {setWeight(e.target.value)}}
                        placeholder="current weight"
                        id="weight" type="text"
                        />
                    </label>
                    </div>
                <div className='input-box'>
                    <label htmlFor="boxingGym" className='details'>Boxing gym:
                        <input onChange={(e) => {setBoxingGym(e.target.value)}}
                        placeholder="Enter your Boxing Gym"
                        id="boxingGym" type="text"
                        />
                    </label>
                    </div>
                <div className='input-box'>
                    <label htmlFor="bouts" className='details'>Number of Bouts:
                        <input onChange={(e) => {setNumOfFights(e.target.value)}}
                        placeholder="Number of Bouts"
                        id="bouts" type="number" 
                        />
                    </label>
                    </div>
                    <div className='input-box'>
                    <label htmlFor="exhibtions" className='details'>Number of Exhibitons:
                        <input onChange={(e) => {setExhibitons(e.target.value)}}
                        placeholder="Number of Bouts"
                        id="exhibitons" type="number" 
                        />
                    </label>
                    </div>
                    <div className='input-box'>
                    <label htmlFor='wins' className='details'>Wins:
                        <input onChange={(e) => {setWins(e.target.value)}}
                        placeholder="Number of Wins"
                        id="wins" type="text"
                        />
                    </label>
                    </div>
                    <div className='input-box'>
                    <label htmlFor="loses" className='details'>Loses:
                        <input onChange={(e) => {setLoses(e.target.value)}}
                        placeholder="Enter your Boxing Gym"
                        id="loses" type="number"
                        />
                    </label>
                    </div>
                <div className=' form-check form-check-reverse form-switch ' id='switch'> 
                    <label className='form-check-label' htmlFor='active'>
                        Active:
                    </label>
                    <input onChange={ checkBoxValue }
                    className="form-check-input" type='checkbox' id='active'
                    />
                </div>
                </div>
                <div className='gender'>
                    <span className='gender-title'>Gender</span>
                    <div className='catergory '>
                        <div className=' form-check form-check-inline'>
                            <label htmlFor='male'> 
                            Male  <input type='checkbox' className="form-check-input " id='male' />
                            </label>
                            </div>
                            <div className='form-check form-check-inline'>
                            <label htmlFor='female'> 
                            Female  <input type='checkbox' className="form-check-input " id='female' />
                            </label>
                            </div>
                            {/* <div className='form-check form-check-inline'>
                            <label htmlFor='or'> 
                            rather not  <input type='checkbox' className="form-check-input" id='or' />
                            </label>
                        </div> */}
                    </div>
                </div>
                {/* Adjust these button colors  */}
                <button className='button btn btn-secondary'>Register</button>
                <Link to="/" className='btn btn-dark'>
                Home
            </Link>
            </form>
            </div>
            
        </div>
        
   
    )
}

export default SignUp