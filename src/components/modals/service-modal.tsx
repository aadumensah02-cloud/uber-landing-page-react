import React from "react";
import { createPortal } from "react-dom";
import type { Service } from "../ServiceOptions";
import "../../styles/modal-styles/service-modal.css";

interface ServiceModalProps {
    service: Service | null;   // null = closed
    onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
    if (!service) return null;

    return createPortal(
        <div className="overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <img src={service.icon} alt="" style={{ width: 120 }} />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <p className="service-details">{service.details}</p>
                <button className="order-button">{service.buttonText}</button>
            </div>
        </div>,
        document.body
    );
};

export default ServiceModal;