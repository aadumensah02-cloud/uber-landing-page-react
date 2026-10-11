import React, { useId } from "react";
import "../../styles/modal-styles/drive-modal.css";
import { useModalFocus } from "../../useModalFocus";
import { createPortal } from "react-dom";

interface DriveModalProps {
    isDriveOpen: boolean;
    onClose: () => void;
}

const DriveModal: React.FC<DriveModalProps> = ({ isDriveOpen, onClose }) => {
    const titleId = useId();
    // Hooks must run before the early return below (Rules of Hooks)
    const dialogRef = useModalFocus(isDriveOpen, onClose);

    // Render nothing while closed so the modal mounts fresh on each open
    if (!isDriveOpen) return null;
    
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
                    className="drive-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    tabIndex={-1}
                >
                    <button className="drive-close-btn" onClick={onClose}>
                        &times;
                    </button>
                    <div className="drive-modal-content">
                        <h2 id={titleId}>Car Rental</h2>
                        <div className="drive-top-modal">
                            <div className="purpose-modal">
                                <label htmlFor="purpose">Purpose:</label>
                                <select name="purpose" id="purpose">
                                    <option value="#" className="purpose-header" hidden>
                                        Select Purpose
                                    </option>
                                    <option value="rental">Renting a car</option>
                                    <option value="rental">Renting someone's car</option>
                                </select>
                            </div>

                            <div className="number-modal">
                                <label htmlFor="number">Type of Vehicle:</label>
                                <select name="type" id="type">
                                    <option value="#" className="type-header" hidden>
                                        Select Type
                                    </option>
                                    <option value="type">Bicycle</option>
                                    <option value="type">Motorbike</option>
                                    <option value="type">Tricycle</option>
                                    <option value="type">Car</option>
                                    <option value="type">Van</option>
                                    <option value="type">Pickup Truck</option>
                                </select>
                            </div>
                        </div>

                        <div className="drive-middle-modal">
                            <div className="number-package-modal">
                                <label htmlFor="text">Number of Packages:</label>
                                <input type="number" placeholder="Enter number" />
                            </div>

                            <div className="suggested-price-modal">
                                <label htmlFor="number">Suggested Price:</label>
                                <input type="number" placeholder="GHs" />
                            </div>
                        </div>

                        <div className="drive-bottom-modal">
                            <div className="pickup-location-modal">
                                <label htmlFor="location">Pickup Location:</label>
                                <input type="text" placeholder="Enter location" />
                            </div>

                            <div className="dropoff-location-modal">
                                <label htmlFor="text">Dropoff Location:</label>
                                <input type="text" placeholder="Enter dropoff location" />
                            </div>
                        </div>

                        <div>
                            <button className="drive-modal-button">Complete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default DriveModal;
