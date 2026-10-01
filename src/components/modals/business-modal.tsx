import React from "react";

interface BusinessModalProps {
    isCityOpen: boolean;
    onClose: () => void;
}


const BusinessModal: React.FC<BusinessModalProps> = ({isBusinessOpen, onClose}) => {
    // const [isOpen, setIsOpen] = useState(false);

    if (!isBusinessOpen) return null;

    return (
        <div>
            <div className="overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>

                    <h2>Select Pickup Location</h2>
                    <input type="text" placeholder="Enter pickup location" />

                </div>

            </div>
        </div>
    )
}

export default BusinessModal;