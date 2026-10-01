import React from "react";
import '../styles/Navbar.css';
import navImg from "../img/uber-img14.png";

const Navbar: React.FC = () => {
    return (
        <header>
            <div className="navbar-section">
                <h1>Uber</h1>
                <div className="nav-left-side-section">
                    <nav id="nav-links">
                        <ul>
                            <li>
                                <a href="#" className="nav-links">Ride</a>
                            </li>
                            <li>
                                <a href="#"  className="nav-links">Drive</a>
                            </li>
                            <li>
                                <a href="#"  className="nav-links">Business</a>
                            </li> 
                            <li>
                                <a href="#"  className="nav-links">Uber Eats</a>
                            </li>
                            <li className="accordion-item">
                                <button className="accordion-toggle">
                                    About
                                <img src={navImg} alt="" className="chevron"/>
                            </button>
                            <ul className="accordion-panel">
                                {/* <li><a href="#">About us</a></li>
                                <li><a href="#">Our offerings</a></li>
                                <li><a href="#">How Uber works</a></li>
                                <li><a href="#">Sustainability</a></li>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Newsroom</a></li>
                                <li><a href="#">Investor Relations</a></li>
                                <li><a href="#">Autonomous</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Careers</a></li> */}
                                </ul>
                            </li>
                            
                        </ul>
                  </nav>
               </div>

                <div className="nav-right-side-section">
                    <button className="eng-button">EN</button>
                    <a href="#" className="nav-help-button">Help</a>
                    <a href="#" className="nav-log-button">Log in</a>
                    <button className="signup-button">Sign up</button>
                </div>
                
                {/* <button className="mobile-button">☰</button>
                <button className="close-button">✕</button> */}
           </div>
      </header>
    )

}

export default Navbar;