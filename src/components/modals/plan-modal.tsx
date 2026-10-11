import React, { useId } from "react";
import "../../styles/modal-styles/plan-modal.css";
import { useModalFocus } from "../../useModalFocus";
import { createPortal } from "react-dom";

interface PlanModelProps {
    isPlanOpen: boolean;
    onClose: () => void;
}

const PlanModal: React.FC<PlanModelProps> = ({ isPlanOpen, onClose }) => {
    const titleId = useId();
    // Hooks must run before the early return below (Rules of Hooks)
    const dialogRef = useModalFocus(isPlanOpen, onClose);

    // Render nothing while closed so the modal mounts fresh on each open
    if (!isPlanOpen) return null;

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
                    className="plan-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    tabIndex={-1}
                >
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
