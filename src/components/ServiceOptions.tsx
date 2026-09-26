import React from "react";
import Card from "./common/Card";
import '../styles/ServiceOptions.css'
import rideIcon from '../img/uber-img2.png';
import reserveIcon from '../img/uber-img3.png'
import courierIcon from '../img/uber-img4.png'
import motorIcon from '../img/uber-img5.png'

const ServiceOptions: React.FC = () => {
        return (
            <div>
                <div className="service-options">
                    <h2>Explore what you can do with Uber</h2>

                    <div className="service-cards">
                        <Card
                           icon={rideIcon}
                           title="Ride"
                           description="Go anywhere with Uber. Request a ride, hop in, and go"
                           buttonText="Details"
                        />

                        <Card
                           icon={reserveIcon}
                           title="Reserve"
                           description="Reserve a ride in advance so you can relax on the day of your trip"
                           buttonText="Details"
                        />

                        <Card
                           icon={courierIcon}
                           title="Courier"
                           description="Uber makes same-day item delivery easier than ever"
                           buttonText="Details"
                        />

                        <Card
                           icon={motorIcon}
                           title="Motor (Okada)"
                           description="Get affordable motorbike rides in minutes at your doorstep"
                           buttonText="Details"
                        />
                    </div>
                </div>
            </div>
        )
}

export default ServiceOptions;