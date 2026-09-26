import React from "react";
import '../styles/CitySection.css';
import cityImg from '../img/uber-img7.webp';


const CitySection: React.FC = () => {
    return (
        <div>
            <div className="city-section">
                <div className="city-text">
                  <h2>Planning your next getaway?</h2>
                  <p>From weekend road trip to international destination, we've got you covered. Explore transport options, points of interest, and more with our new City Hub</p>
                 <button>Accra</button>
               </div>
               <div>
                 <img src={cityImg} alt=""/>
               </div>
            </div>
        </div>

    )
}


export default CitySection