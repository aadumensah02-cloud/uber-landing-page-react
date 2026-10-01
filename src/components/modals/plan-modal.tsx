import React from "react";
import "../../styles/modal-styles/plan-modal.css";

interface PlanModelProps {
    isPlanOpen: boolean;
    onClose: () => void;
}


const PlanModal: React.FC<PlanModelProps> = ({isPlanOpen, onClose}) => {
    // const [isOpen, setIsOpen] = useState(false);

    if (!isPlanOpen) return null;

    return (
        <div>
            <div className="overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>

                    <div className="plan-modal">
                        <h2>Reservation Accepted </h2>
                        <span>Thank you for placing a reservation with Uber</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PlanModal;