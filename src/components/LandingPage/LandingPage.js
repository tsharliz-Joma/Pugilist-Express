import { auth } from '../../firebase-config'
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import './LandingPage.css'
import '../Footer/Footer.css'
import MyCarousel from './Carousel'
import NewsLetter from '../NewLetter/NewsLetter.js'
import Carousel from 'react-bootstrap/Carousel'
import {GiCrown} from 'react-icons/gi'

import Caesars from '../../images/caesars-palace.jpeg'
import MGM from '../../images/mgm-grand.jpeg'
import RodLaver from '../../images/rodlaver-arena.jpeg'
import Wembly from '../../images/wembley-stadium.jpeg'

const LandingPage = () => {

    const [ LoggedInNav, setLogin ] = useState(
       
        <nav className="nav-bar-container navbar navbar-expand-lg navbar-light bg-light h-100">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link mono-text fs-2' >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='login' className=" nav-link mono-text fs-4">
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='signup' className=" nav-link mono-text fs-4">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        <br/>
        {/* { user.email } */}
    </nav>
);

        // useEffect or the page crahses everytime you try to navigate to home
    useEffect(() => {
        onAuthStateChanged( auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser)
                console.log(currentUser)
                setLogin(
                    <div className="nav-bar-container navbar navbar-expand-lg navbar-light bg-light h-100">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <Link to='match-bout' className='nav-link text-secondary mono-text fs-5 '>
                                        Search  Match  Bout's 
                                    </Link>
                                </li>
                                
                                <li className='nav-item'>
                                    <Link to='sparring' className='nav-link text-secondary mono-text fs-5'>
                                        Search  Sparring  Bout's
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    // <div className="nav-bar-container">
                    //     <Link to='match-bout' className="nav-bar-button btn btn-light bld-font">
                    //         Match Bout
                    //     </Link>
                    //     <Link to='sparring' className="nav-bar-button btn btn-light bld-font">
                    //         Sparring
                    //     </Link>
                        
                    // </div>
                );

            }
        })
    }, []);

    const [ Logout, setLogout ] = useState(
        <div>
           
        </div>
    );

    const [ user, setUser ] = useState({});

    const _logout = (e) => {
        e.preventDefault(); // You must put this here in-order for window.location.reload(); to work 
        signOut(auth) // This will not refresh the page 
        window.location.reload(); // Force a page refresh 
    };

    useEffect(() => {
        onAuthStateChanged( auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
                setLogout(
                    <form onSubmit={ _logout }>
                        <button className="btn btn-dark btn-outline-light logout-button"> Logout { user.email } </button>
                    </form>
                )
            }
        })
    }, [])


    return(
    
    <div className='landing-body'>


       { LoggedInNav }


        <div className='landing-page-title text-center'>
            <div className='landing-inner-title'>
                <span>Pugilist Express</span>
            </div>
        </div>

            <div className='carousel-container'>

            <Carousel>

                <Carousel.Item className="img-container">
                    <img 
                    className='d-block w-100'
                    src='https://www.ringtv.com/wp-content/uploads/2022/07/YoungPac.jpg'
                    width='400 400'
                    alt="First slide"
                    />
                <Carousel.Caption>
                    <div className="carousel-title">Manny 'Pacman' Pacquiao</div>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="img-container">
                    <img 
                    className='d-clock w-100'
                    src="https://cdn.vox-cdn.com/thumbor/yhcXDip7gLg52BDzkin5pIW1OgU=/0x0:4770x3180/1200x800/filters:focal(1915x245:2677x1007)/cdn.vox-cdn.com/uploads/chorus_image/image/67721431/1283274253.0.jpg"
                    width='400 400'
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel-title">Naoya Inoue</div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="img-container">
                    <img className='d-block w-100'
                    src='https://img.bleacherreport.net/img/images/photos/001/920/263/hi-res-2070752_crop_north.jpg?1349335150&w=3072&h=2048'
                    width='400 400'
                    alt='Third slide'
                    />
                    <Carousel.Caption>
                        <div className="carousel-title">Gatti v Ward</div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            </div>

            
            <div className='rankings-div '>

                <div className='row-fluid pt-5 my-5'>
                    <div className='text-center fs-1 font-monospace fw-bolder bg-light '>Current Rankings</div>
                </div>

                <div className='weight-division-div font-monospace'>

                    <div className=' bg-light weight-div-item'>
                        <div className="text-center fs-3 bg-dark text-white">Heavyweight</div>
                        <ul className="pt-5 text-start">
                            <li className="d-block text-center"><GiCrown color={'gold'} /> Bakhodir Jalolov </li>
                            <li className="d-block">2. Kamshybek Kunkabayev </li>
                            <li className="d-block">3. Frazer Clarke </li>
                            <li className="d-block">4. Nurlan Saparbay </li>
                            <li className="d-block">5. Yaroslav Doronichev </li>
                        </ul>
                    </div>
                    <div className='bg-light weight-div-item'>
                        <div className="text-center fs-3 bg-dark text-white">Middleweight</div>
                        <ul className="pt-5 text-start">
                            <li className="d-block text-center"><GiCrown color={'gold'}/> Oleksandr Khyzhniak </li>
                            <li className="d-block">2. Eumir Marcial </li>
                            <li className="d-block">3. Abilkhan Amankul </li>
                            <li className="d-block">4. Gleb Bakshi </li>
                            <li className="d-block">5. Dzhambulat Bizhamov </li>
                        </ul>
                    </div>
                    <div className=' bg-light weight-div-item'>
                        <div className="text-center fs-3 bg-dark text-white">Welterweight</div>
                        <ul className="pt-5 text-start">
                            <li className="d-block text-center"><GiCrown color={'gold'}/> Aslanbek Shymbergenov </li>
                            <li className="d-block">2. Andrey Zamkovoy </li>
                            <li className="d-block">3. Vakhid Abbasov </li>
                            <li className="d-block">4. Bobo-Usmon Baturov </li>
                            <li className="d-block">5. Vikas Krishan </li>
                        </ul>
                    </div>
                </div>
                
                <div className='weight-division-div font-monospace '>
                    <div className='bg-light weight-div-item'>
                        <div className="text-center fs-3 bg-dark text-white">Lighweight</div>
                        <ul className="pt-5 text-start">
                            <li className="d-block text-center"><GiCrown color={'gold'}/> Andy Cruz </li>
                            <li className="d-block">2. Sofiane Oumiha </li>
                            <li className="d-block">3. Dzmitry Asanau </li>
                            <li className="d-block">4. Aleksei Mazur </li>
                            <li className="d-block">5. Gabil Mamedov </li>
                        </ul>
                    </div>
                    
                    <div className='bg-light weight-div-item'>
                        <div className="text-center fs-3 bg-dark text-white">Featherweight</div>
                        <ul className="pt-5 text-start">
                            <li className="d-block text-center"><GiCrown color={'gold'}/> Shakhobidin Zoirov </li>
                            <li className="d-block">2. Hu Jianguan</li>
                            <li className="d-block">3. Makhmud Sabyrkhan </li>
                            <li className="d-block">4. Gabriel Escobar </li>
                            <li className="d-block">5. Deepak Kumar </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='row pt-3 '>
                <div className='text-center fs-1 font-monospace fw-bolder mb-5 bg-light'>Upcoming Tournaments</div>
            </div>

            <div className='tournaments-div'>

                <div className='tournaments-inner-div mt-5'>

                    <div className='rounded tournament-card'>
                        <Card className=' h-100 rounded border-dark'>
                            <Card.Body className='pb-0'>
                                <Card.Title className='text-center card-title text-white bg-dark fs-3 mono-text'>Lionel Rose Cup</Card.Title>
                                <div className='text-center font-monospace my-5'>
                                    <div className='my-5 fw-bolder'>Lional Rose Cup</div>
                                    <div>10 Action Packed Championship Fights</div>
                                    <div className='card-img'><img src={Caesars} /></div>
                                    <div className=''>At the center of the Mecca of Boxing/</div>
                                </div>
                            </Card.Body>
                                <Card.Footer className='text-center'>
                                    <p> July 30th </p>
                                    <p> Caesar's Palace </p>
                                </Card.Footer>
                        </Card>
                    </div>
                    
                    <div className='rounded tournament-card'>
                            <Card className='h-100 rounded border-dark'>
                                <Card.Body className='pb-0'>
                                    <Card.Title className='text-center text-white bg-dark fs-3 mono-text'>Match Bouts</Card.Title>
                                    <div className='text-center font-monospace my-5'>
                                        <div className='my-5 fw-bolder'>Ali Boxing Cup</div>
                                        <div>45 Bouts to determine the pecking order.</div>
                                        <div className='card-img'><img src={Wembly} /></div>
                                        <div className=''>Serena Isnt here but someone is sure to get served</div>
                                    </div>
                                </Card.Body>
                                <Card.Footer className='text-center'>
                                    <p> June 23rd </p>
                                    <p> Wembly Stadium </p>
                                </Card.Footer>
                            </Card>
                    </div>
                    <div className='rounded tournament-card'>
                        <Card className='h-100 rounded border-dark'>
                            <Card.Body className=''>
                            <Card.Title className='text-center text-white bg-dark fs-3 mono-text'>Johnny Famachan Cup</Card.Title>
                            <div className='text-center font-monospace'>
                                <p className='my-5 fw-bolder'>Johnny Famachan Cup</p>
                                <div>12 Firebattle Fights, Who is Number 1?</div>
                                <div className='card-img'><img src={MGM}/></div>
                                <div>They say what happens in vegas stays in Vegas </div>
                            </div>
                            </Card.Body>
                            <Card.Footer className='text-center'>
                                <p> November 6th </p>
                                <p> MGM Grand </p>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className='rounded tournament-card'>
                        <Card className='h-100 rounded border-dark'>
                            <Card.Body className=''>
                            <Card.Title className='text-center text-white bg-dark fs-3 mono-text'>Australian Titles</Card.Title>
                            <div className='text-center font-monospace '>
                                <div className='my-5 fw-bolder'>Australian Titles</div>
                                <div>Austrlian Amatuer Titles are up for grabs.</div>
                                <div className='card-img'><img src={RodLaver} /></div>
                                <div className='my-auto' >Who will dominate and destroy?.</div>
                            </div>
                            </Card.Body>
                            <Card.Footer className='text-center'>
                                <p> October 25th </p>
                                <p> Rod Laver Arena </p>
                            </Card.Footer>
                        </Card>
                    </div>
 
                </div>
            </div>

            <div className='container mt-5 pt-3'>
                <div className='row '>

                    <div className='col-8 enquiry-container bg-light mx-auto  '>

                        <div className='row bg-dark text-white fw-bolder font-monospace fs-3'>Enquiry</div>

                        <Form className='py-2 text-start font-monospace fs-5 mx-auto row w-75'>
                            <Form.Group className='' >
                                <Form.Label >Name</Form.Label>
                                <Form.Control type={""} placeholder={"Enter Full name"} />  
                            </Form.Group>
                            <Form.Group className='' >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type={"email"} placeholder={"Enter Email"} />
                            </Form.Group>
                            <Form.Group className=''>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type={"text"} placeholder={"Mobile Number"} />
                            </Form.Group>
                            <Form.Group className='g-0'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                        </Form>

                    </div>

                </div>

            </div>

            {/* <NewsLetter /> */}

            <footer className="footer-container bg-secondary ">
            <div className='footer-nav footer-ul'>
                <div className="text-center">
                    { Logout }
                </div>
                <ul className="container-s text-center">
                    <div className="row text-white mono-text">
                        <li className="link-tag  col"><a className="link-light" href="https://www.boxingvic.org.au/home/" target='_blank' >Boxing VIC </a></li>
                        <li className="link-tag col"><a className="link-light" href="https://www.boxingqueenslandinc.org/home/" target='_blank'>Boxing QLD</a></li>
                        <li className="link-tag col"><a className="link-light" href="https://www.boxingsa.org.au/home/" target='_blank'>Boxing SA</a></li>
                    </div>
                    <div className="row">
                        <li className="link-tag col"><a className="link-light" href="https://www.boxingwa.org.au/home/" target='_blank'>Boxing WA</a></li>
                        <li className="link-tag col"><a className="link-light" href="https://www.boxingact.org.au/home/" target='_blank'>Boxing ACT</a></li>
                    </div>
                </ul>
            </div>
            _tsharliz_
        </footer>
            
        </div>
    )
}

export default LandingPage 