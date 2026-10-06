import React, { useState, useEffect, useRef} from "react";
import '../styles/HeroSection.css';
import logo1 from "../img/uber-img1.svg"
import logo2 from "../img/uber-img19.png"
import SeePricesModal from "./modals/seePrices-modal";
import pickupImg from "../img/uber-img18.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import DriveModal from "./modals/drive-modal";

const HeroSection: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [isDriveOpen, setIsDriveOpen] = useState(false);
    const btnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const btn = btnRef.current;
        if (!btn) return;

        // distance from the top of the page, measured once
        const btnOffset = btn.getBoundingClientRect().top + window.scrollY;

        const handleScroll = () => {
            setIsFixed(window.scrollY > btnOffset);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // set the correct state on first render

        return () => window.removeEventListener("scroll", handleScroll); // cleanup
    }, []);


    return (
        <div>
            <section className="hero-section" aria-labelledby="hero-title">
                <div className="hero-section-content">
                    <div className="hero-section-left">
                        <div className="hero-header">
                           <img src={logo2} alt="" /><p>Accra, GH</p>
                           <a href="#">Change city</a>
                        </div>

                        <h1 id="hero-title">Go anywhere with Uber</h1>

                        <div className="select-wrapper">
                            <img src={pickupImg} alt="" className="select-icon"/>

                            <select name="pickup" id="pickup" aria-label="pickup" >
                                <option value="#" className="pickup-options-header" hidden>Pickup now</option>
                                <option value="pickup">Pickup now</option>
                                <option value="schedule">Schedule later</option>
                            </select>
                            <FontAwesomeIcon icon={faChevronDown} className="select-chevron" />
                        </div>

                       <div className="hero-select">
                            <div className="location-input">
                                <span className="location-dot" />
                                <input
                                    list="pickup-options"
                                    id="pickup-location"
                                    type="text"
                                    placeholder="Pickup location"
                                    aria-label="pickup-location"
                                />
                                <datalist id="pickup-options">
                                    <option value="Kempidki"></option>
                                    <option value="Accra"></option>
                                    <option value="Kumasi"></option>
                                </datalist>
                                <FontAwesomeIcon icon={faLocationArrow} className="location-arrow" />
                            </div>

                            <div className="location-input">
                                <span className="location-square" />
                                <input
                                    list="dropoff-options"
                                    id="dropoff-location"
                                    type="text"
                                    placeholder="Dropoff location"
                                    aria-label="dropoff-location"
                                />
                                <datalist id="dropoff-options">
                                    <option value="Kempidki"></option>
                                    <option value="Accra"></option>
                                    <option value="Kumasi"></option>
                                </datalist>
                            </div>
                        </div>
                        <div className="header-button-slot" style={{ minHeight: 70 }}>
                            <div ref={btnRef} className={`header-button ${isFixed ? "fixed" : ""}`}>
                                <button className="prices-button" onClick={() => setIsOpen(true)}>See prices</button>
                                <a href="#" className="prices-link">Log in to see your recent activity</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero-section-right">
                       

                        <div className="hero-img">
                            <img src={logo1} alt="" className="logo1" />
                            <div className="hero-img-text">
                                <p>Ready to travel?</p>
                                <button  onClick={() => setIsDriveOpen(true)}>Schedule ahead</button>
                            </div>
                        </div>
                   </div>
              </div>
            </section>

            <SeePricesModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <DriveModal isDriveOpen={isDriveOpen} onClose={() => setIsDriveOpen(false)} />

        </div>
 

          
      
    );

    
};

export default HeroSection;