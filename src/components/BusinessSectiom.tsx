import React from "react";
import businessImg from '../img/uber-img9.webp';
import Section from "./common/Section";
// import '../styles/BusinessSection.css';

const BusinessSection: React.FC = () => {
    return (
        <div>
            <div className="business-section">
                <Section
                    title="The Uber you know, reimagined for business"
                    description="Uber for Business is a platform for managing global rides and meals, annd local deliveries, for companies of any size."
                    buttonText="Get Started"
                    link="Check out our solutions"
                    icon={businessImg}
                    
                />



                {/* <div className="business-text">
                    <h2>The Uber you know, reimagined for business</h2>
                    <p>Uber for Business is a platform for managing global rides and meals, annd local deliveries, for companies of any size.</p>
                    <button>Get Started</button>
                    <a href="#">Check out our solutions</a>
                </div>

                <div>
                  <img src={businesssImg} alt=""/>
                </div> */}
            </div>
        </div>

    );
};


export default BusinessSection;