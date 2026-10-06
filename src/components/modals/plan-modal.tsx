import React, { useId} from "react";
import "../../styles/modal-styles/plan-modal.css";
// import "../../styles/modal-styles/globalmodal.css";
import { useModalFocus } from "../../useModalFocus";
import { createPortal } from "react-dom";

interface PlanModelProps {
    isPlanOpen: boolean;
    onClose: () => void;
}


const PlanModal: React.FC<PlanModelProps> = ({isPlanOpen, onClose}) => {
    const titleId = useId();
    const dialogRef = useModalFocus(isPlanOpen, onClose);
    // const [isOpen, setIsOpen] = useState(false);

    if (!isPlanOpen) return null;

    return createPortal (
        <div>
            <div className="overlay" onClick={onClose}>
                <div
                    ref={dialogRef}
                    className="plan-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    tabIndex={-1}
                    onClick={(e) => e.stopPropagation()}>
                    <button className="plan-close-btn" onClick={onClose}>
                        &times;
                    </button>

                    <div className="plan-modal-content">
                        <h2 id={titleId}>Reservation Accepted </h2>
                        <span>Thank you for placing a reservation with Uber</span>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default PlanModal;