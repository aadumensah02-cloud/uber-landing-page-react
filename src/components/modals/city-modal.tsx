import React from "react";

interface CityModalProps {
    isCityOpen: boolean;
    onClose: () => void;
}


const CityModal: React.FC<CityModalProps> = ({isCityOpen, onClose}) => {
    // const [isOpen, setIsOpen] = useState(false);

    if (!isCityOpen) return null;

    return (
        <div>
            <div className="overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
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
        </div>
    )
}

export default CityModal;