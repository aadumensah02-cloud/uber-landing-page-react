import React from "react";
import "../../styles/modal-styles/citymodal.css";
import { useModalFocus } from "../../useModalFocus";
import { createPortal } from "react-dom";

interface CityModalProps {
    isCityOpen: boolean;
    onClose: () => void;
}

const CityModal: React.FC<CityModalProps> = ({ isCityOpen, onClose }) => {
    // Hooks must run before the early return below (Rules of Hooks)
    const dialogRef = useModalFocus(isCityOpen, onClose);

    // Render nothing while closed so the modal mounts fresh on each open
    if (!isCityOpen) return null;

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
                    className="city-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Choose your location"
                    tabIndex={-1}
                >
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>

                    <div className="order-input">
                        <label htmlFor="Pickup-Location" className="input-modal">
                            Pickup Location:
                        </label>
                        <input type="text" placeholder="Enter pickup location" />

                        <label htmlFor="Dropoff-Location" className="input-modal">
                            Dropoff Location:
                        </label>
                        <input type="text" placeholder="Enter pickup location" />

                        <label htmlFor="price" className="input-modal">
                            Suggested Price:
                        </label>
                        <input type="number" placeholder="GHs:" className="dropout-input-modal" />
                    </div>

                    <div className="order-bottom">
                        <button className="order-button">Order a ride</button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default CityModal;
