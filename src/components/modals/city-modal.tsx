import React from "react";
// import "../../styles/modal-styles/globalmodal.css";
import "../../styles/modal-styles/citymodal.css";
import { useModalFocus } from "../../useModalFocus";
import { createPortal } from "react-dom";

interface CityModalProps {
    isCityOpen: boolean;
    onClose: () => void;
}


const CityModal: React.FC<CityModalProps> = ({isCityOpen, onClose}) => {
    // const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useModalFocus(isCityOpen, onClose);
    if (!isCityOpen) return null;

    return createPortal(
        <div>
            <div className="overlay" onClick={onClose}>
                <div
                    ref={dialogRef}
                    className="city-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Choose your location"
                    tabIndex={-1}
                    onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>

                    <div className="order-input">
                        <label htmlFor="Pickup-Location" className="input-modal">Pickup Location:</label>
                        <input type="text" placeholder="Enter pickup location" />

                        <label htmlFor="Dropoff-Location" className="input-modal">Dropoff Location:</label>
                        <input type="text" placeholder="Enter pickup location" />

                        <label htmlFor="price" className="input-modal">Suggested Price:</label>
                        <input type="number" placeholder="GHs:" className="dropout-input-modal" />
                    </div>

                    <div className="order-bottom">
                        <button className="order-button">
                            Order a ride
                        </button>
                    </div>

                </div>
            </div>
        </div>,
        document.body
    )
}

export default CityModal;