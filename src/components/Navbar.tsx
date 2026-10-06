import React, { useState, useEffect } from "react";
import '../styles/Navbar.css';
import navImg from "../img/uber-img14.png";
import SignupModal from "./modals/signup-modal";
import LogInModal from "./modals/logIn-modal";

const Navbar: React.FC = () => {

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
   const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
        document.documentElement.classList.toggle("menu-open", menuOpen);
        document.body.classList.toggle("menu-open", menuOpen);

         return () => {
            document.documentElement.classList.remove("menu-open");
            document.body.classList.remove("menu-open");
        }
    }, [menuOpen]);

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
                                <button className={`accordion-toggle ${openAccordion === "about" ? "open" : ""}`}
                                    onClick={() => setOpenAccordion(openAccordion === "about" ? null : "about")}>
                                        About
                                    <img src={navImg} alt="" className="chevron"/>
                               </button>
                              <ul className={`accordion-panel ${openAccordion === "about" ? "open" : ""}`}>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Our offerings</a></li>
                                    <li><a href="#">How Uber works</a></li>
                                    <li><a href="#">Sustainability</a></li>
                                    <li><a href="#">Explore</a></li>
                                    <li><a href="#">Newsroom</a></li>
                                    <li><a href="#">Investor Relations</a></li>
                                    <li><a href="#">Autonomous</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                  </nav>
               </div>

                <div className="nav-right-side-section">
                    <button className="eng-button">EN</button>
                    <a href="#" className="nav-help-button" onClick={() => setIsSignupOpen(true)}>Help</a>
                    <a href="#" className="nav-log-button" onClick={(e) => {e.preventDefault(); setIsLogInOpen(true);}}>Log in</a>
                    <button className="signup-button"  onClick={() => setIsSignupOpen(true)}>Sign up</button>
                </div>
                {menuOpen ? (
                        <button className="mobile-button" onClick={() => setMenuOpen(true)}>☰</button>
                ) : (
                        <button className="close-button" onClick={() => setMenuOpen(false)}>✕</button>
                )}
           </div>

            <SignupModal isSignupOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
            <LogInModal isLogInOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)} />
      </header>
    )

}

export default Navbar;