import React, {useState}from "react";
import Card from "./common/Card";
import '../styles/ServiceOptions.css'
import rideIcon from '../img/uber-img2.png';
import reserveIcon from '../img/uber-img3.png'
import courierIcon from '../img/uber-img4.png'
import motorIcon from '../img/uber-img5.png'
import ServiceModal from "./modals/service-modal";

export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    details: React.ReactNode;
    buttonText: React.ReactNode;
}

const services: Service[] = [
    {
        id: "ride",
        icon: rideIcon,
        title: "Ride",
        description: "Go anywhere with Uber. Request a ride, hop in, and go",
        details: (
            <ul>
                <li>Choose a ride type that fits your budget</li>
                <li>Track your driver in real time</li>
            </ul>
        ),
        buttonText:('Order a ride'),
    },
    {
        id: "reserve",
        icon: reserveIcon,
        title: "Reserve",
        description: "Reserve a ride in advance so you can relax on the day of your trip",
        details: <p>Book up to 90 days ahead and cancel free up to 60 minutes before pickup.</p>,
        buttonText:('Order a ride'),
    },
    {
        id: "courier",
        icon: courierIcon,
        title: "Courier",
        description: "Uber makes same-day item delivery easier than ever",
        details: (
            <>
                <p>Send packages across the city in hours.</p>
                <input type="text" placeholder="Package description" className="package-modal" />
            </>
        ),
        buttonText:('Order a courier'),
    },
    {
        id: "motor",
        icon: motorIcon,
        title: "Motor (Okada)",
        description: "Get affordable motorbike rides in minutes at your doorstep",
        details: <p>Helmets are provided on every trip.</p>,
        buttonText:('Order a ride'),
    },
];

const ServiceOptions: React.FC = () => {
    const [selected, setSelected] = useState<Service | null>(null);

    return (
        <div>
            <div className="service-options">
                <h2>Explore what you can do with Uber</h2>

                <div className="service-cards">
                    {services.map((s) => (
                        <Card
                            key={s.id}
                            icon={s.icon}
                            title={s.title}
                            description={s.description}
                            buttonText="Details"
                            onButtonClick={() => setSelected(s)}
                        />
                    ))}
                </div>
            </div>

            <ServiceModal service={selected} onClose={() => setSelected(null)} />
        </div>
    );
};

export default ServiceOptions;