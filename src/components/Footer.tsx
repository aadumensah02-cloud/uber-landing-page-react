import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faYoutube, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";




const Footer: React.FC = () => {
    return (
        <div className="footer-section">
            <div className="uber-logo">
                <a href="#" className="uber-link">Uber</a>
                <a href="#">Vist Help Center</a>
            </div>
        
            <div className="uber-content">
                <div className="uber-section">
                    <span>Company</span>
                    <a href="#">About us</a>
                    <a href="#">Our offerings</a>
                    <a href="#">Newsroom</a>
                    <a href="#">Investors</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                </div>

                <div className="uber-section">
                    <span>Products</span>
                    <a href="#">Ride</a>
                    <a href="#">Drive</a>
                    <a href="#">Eat</a>
                    <a href="#">Uber for Business</a>
                    <a href="#">Uber Freight</a>
                    <a href="#">Gift cards</a>
                    <a href="#">Uber Health</a>
                </div>

                <div className="uber-section">
                    <span>Global citizenship</span>
                    <a href="#">Safety</a>
                    <a href="#">Sustainability</a>
                </div>

                <div className="uber-section">
                    <span>Travel</span>
                    <a href="#">Reserve</a>
                    <a href="#">Airorts</a>
                    <a href="#">Hotels</a>
                    <a href="#">Cities</a>
                </div>
           </div>

            <div className="footer-info">
                <div className="footer-social">
                    <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#" aria-label="X"><FontAwesomeIcon icon={faXTwitter} /></a>
                </div>

                <div className="uber-buttons">
                    <button><FontAwesomeIcon icon={faGlobe} />English</button>
                    <button><FontAwesomeIcon icon={faLocationDot} />Accra</button>
                </div>
            </div>

        

            <div className="uber-terms">
                <div>
                 <span>@2026 Uber Technologies Inc.</span>
                </div>
                <div>
                <a href="#">Privacy</a>
                <a href="#">Accessibility</a>
                <a href="#">Terms</a>
                </div>
            </div>
 
        </div>
    )
}

export default Footer;