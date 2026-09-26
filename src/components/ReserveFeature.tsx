import React from "react";
import '../styles/ReserveFeature.css';
import reserveImg from '../img/uber-img10.png';


const ReserveFeature: React.FC = () => {
    return (
        <div>
            <div className="reserve-section">
                <h2>Plan for later</h2>
              <div className="reserve-content">
                    <div className="reserve-left">
                        <div className="reserve-text">
                          <h2>Get your ride right <br />with Uber Reserve</h2>
                          <p>Choose date and time</p>

                           <div className="reserve-input">
                                <div className="reserve-date">
                                  <span>Date</span>
                                  <input type="date" placeholder="Date" />
                               </div>
                               <div className="reserve-time">
                                  <span>Time</span>
                                  <input type="time"/>
                               </div> 
                           </div>
                             

                            <button className="reserve-button">Next</button>  
                       </div>
                       
                        <div className="reserve-image">
                           <img src={reserveImg} alt="" className="reserve-img" />
                        </div>
                       
                    </div>
                
                 
                  <div className="reserve-right">
                        <h2>Benefits</h2>
                        <div className="reserve-right-text">
                            <p>Choose your exact pickup time up to 90 days in advance.</p><hr/>
                            <p>Extra wait time included to meet yout ride.</p><hr/>
                            <p>Cancel at no charge up to 60 minutes in advance.</p>
                        </div>
                        <a href="#">See terms</a>
                   </div>
              </div>
            </div>
        </div>
    );
};

export default ReserveFeature;