import React from "react";
import "../../styles/modal-styles/seePrices-modal.css";
import { useModalFocus } from "../../useModalFocus";
import { createPortal } from "react-dom";
// import "../../styles/modal-styles/globalmodal.css";

interface SeePricesModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const SeePricesModal: React.FC<SeePricesModalProps> = ({isOpen, onClose}) => {
    const dialogRef = useModalFocus(isOpen, onClose);

    // const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) return null;

    return createPortal (
        <div>
            <div className="overlay" onClick={onClose}>
                <div
                    ref={dialogRef}
                    className="price-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Choose your price"
                    tabIndex={-1}
                    onClick={(e) => e.stopPropagation()}>
                    <button className="price-close-btn" onClick={onClose}>
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

export default SeePricesModal;


