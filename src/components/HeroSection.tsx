import React from "react";
import '../styles/HeroSection.css';
import logo1 from "../img/uber-img1.svg"

const HeroSection: React.FC = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="hero-section-content">
                    <div className="hero-section-left">
                        <div className="hero-header">
                           <p>Accra, GH</p>
                           <a href="#">Change city</a>
                        </div>

                        <h1>Go anywhere with  Uber</h1>

                        <select name="pickup" id="pickup">
                            <option value="#" className="pickup-options-header" hidden>Pickup now</option>
                            <option value="pickup">Pickup now</option>
                            <option value="schedule">Schedule later</option>
                        </select>

                        <div className="hero-select">
                            <input list="pickup-options" id="pickup-location" type="text" placeholder="Pickup location" />
                            <datalist id="pickup-options">
                                <option value="Kempidki"></option>
                                <option value="Accra"></option>
                                <option value="Kumasi"></option>
                                <option value=""></option>
                                <option value=""></option>
                            </datalist>

                            <input list="dropoff-options" id="dropoff-location" type="text" placeholder="Dropoff location" />
                            <datalist id="dropoff-options">
                                <option value="Kempidki"></option>
                                <option value="Accra"></option>
                                <option value="Kumasi"></option>
                                <option value=""></option>
                                <option value=""></option>
                            </datalist>
                        </div>

                        <div className="header-button">
                            <button className="prices-button">See prices</button>
                            <a href="#" className="prices-link">Log in to see your recent activity</a>
                        </div>
                    </div>
                    
                    <div className="hero-section-right">
                       

                        <div className="hero-img">
                            <img src={logo1} alt="" className="logo1" />
                            <div className="hero-img-text">
                                <p>Ready to travel?</p>
                                <button>Schedule ahead</button>
                            </div>
                        </div>
                   </div>
              </div>
            </div>
        </div>


    );
};

export default HeroSection;