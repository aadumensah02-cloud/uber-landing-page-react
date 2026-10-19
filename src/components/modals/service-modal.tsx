import React, { useId } from "react";
import { createPortal } from "react-dom";
import type { Service } from "../ServiceOptions";
import { useModalFocus } from "../../useModalFocus";
import "../../styles/modal-styles/service-modal.css";

interface ServiceModalProps {
    service: Service | null; // null = modal closed
    onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
    const titleId = useId();
    // Hooks must run before the early return below (Rules of Hooks)
    const dialogRef = useModalFocus(Boolean(service), onClose);

    // Render nothing while closed so the modal mounts fresh on each open
    if (!service) return null;

    // Portal to document.body so the overlay isn't clipped by parent styles
    return createPortal(
        <div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- Esc is handled in useModalFocus */}
            <div
                className="overlay"
                onClick={(e) => {
                    if (e.target === e.currentTarget) onClose();
                }}
            >
                <div
                    ref={dialogRef}
                    className="service-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    tabIndex={-1}
                >
                    <button className="service-close-btn" onClick={onClose}>
                        &times;
                    </button>
                    <img src={service.icon} alt="" style={{ width: 120 }} />
                    <h2 id={titleId}>{service.title}</h2>
                    <p>{service.description}</p>
                    <p className="service-details">{service.details}</p>
                    <button className="service-modal-button" onClick={onClose}>{service.buttonText}</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ServiceModal;
