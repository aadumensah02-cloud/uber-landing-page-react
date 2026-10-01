import React, { useState }from "react";
import '../styles/CitySection.css';
import cityImg from '../img/uber-img7.webp';
import CityModal from "./modals/city-modal";
import cityButton from "../img/uber-img19.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const CitySection: React.FC = () => {

    const [isCityOpen, setIsCityOpen] = useState(false);

    return (
        <div>
            <div className="city-section">
                <div className="city-text">
                  <h2>Planning your next getaway?</h2>
                  <p>From weekend road trip to international destination, we've got you covered. Explore transport options, points of interest, and more with our new City Hub</p>
                  <div className="city-button">
                      <img src={cityButton} alt="" className="city-icon"  style={{ width: 20, height: 20, flexShrink: 0 }} />
                      <button onClick={() => setIsCityOpen(true)}>Accra</button>
                      <FontAwesomeIcon icon={faChevronDown} className="city-chevron"/>
                  </div>
               </div>
               <div>
                 <img src={cityImg} alt=""/>
               </div>
            </div>


            <CityModal isCityOpen={isCityOpen} onClose={() => setIsCityOpen(false)} />
        </div>

    )
}


export default CitySection