// import React, { useState, useEffect } from "react";
// import { auth } from '../../firebase-config'
// import { signOut } from "firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";
// import '../Footer/Footer.css'

// const Footer = () => {

//     const [ logout, setLogout ] = useState(
//         <div>
//             {/* Empty Div */}
//         </div>
//     );

//     const [ user, setUser ] = useState({});

//     const _logout = (e) => {
//         e.preventDefault(); // You must put this here in-order for window.location.reload(); to work 
//         signOut(auth) // This will not refresh the page 
//         window.location.reload(); // Force a page refresh 
//     };

//     useEffect(() => {
//         onAuthStateChanged( auth, (currentUser) => {
//             if(currentUser){
//                 setUser(currentUser);
//                 setLogout(
//                     <form onSubmit={ _logout }>
//                         <button className="btn btn-dark btn-outline-light logout-button"> Logout { user.email } </button>
//                     </form>
//                 )
//             }
//         })
//     }, [])

//     return(
//         <footer className="footer-container container-fluid">
//             <div className='footer-nav footer-ul'>
//                 <div className="text-center">
//                     { logout }
//                 </div>
//                 <ul className="container text-center ">
//                     <div className="row ">
//                         <li className="link-tag col"><a href="https://www.boxingvic.org.au/home/" target='_blank' >Boxing VIC </a></li>
//                         <li className="link-tag col"><a href="https://www.boxingqueenslandinc.org/home/" target='_blank'>Boxing QLD</a></li>
//                         <li className="link-tag col"><a href="https://www.boxingsa.org.au/home/" target='_blank'>Boxing SA</a></li>
//                     </div>
//                     <div className="row">
//                         <li className="link-tag col"><a href="https://www.boxingwa.org.au/home/" target='_blank'>Boxing WA</a></li>
//                         <li className="link-tag col"><a href="https://www.boxingact.org.au/home/" target='_blank'>Boxing ACT</a></li>
//                     </div>
//                 </ul>
//             </div>
//             _tsharliz_
//         </footer>
//     )
// }


// export default Footer