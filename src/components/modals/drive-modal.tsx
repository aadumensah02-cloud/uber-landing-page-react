import React from "react";

interface DriveModalProps {
    isDriveOpen: boolean;
    onClose: () => void;
}


const DriveModal: React.FC<DriveModalProps> = ({isDriveOpen, onClose}) => {
    // const [isOpen, setIsOpen] = useState(false);

    if (!isDriveOpen) return null;

    return (
        <div>
            <div className="overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>

                    <h2>Car Rental</h2>
                    <div>
                        <div>
                            <label htmlFor="purpose">Purpose:</label>
                            <select name="purpose" id="purpose">
                             <option value="#" className="purpose-header" hidden >Select Purpose</option>
                             <option value="rental">Renting a car</option>
                             <option value="rental">Renting someone's car</option>
                           </select>
                        </div>

                        <div>
                            <label htmlFor="number">Type of Vehicle:</label>
                            <select name="type" id="type">
                                <option value="#" className="type-header" hidden>Select Type</option>
                                <option value="type">Bicycle</option>
                                <option value="type">Motorbike</option>
                                <option value="type">Tricycle</option>
                                <option value="type">Car</option>
                                <option value="type">Van</option>
                                <option value="type">Pickup Truck</option>
                            </select>
                        </div>
                    </div>
                   
                    <div>
                        <div>
                            <label htmlFor="text">Number of Packages:</label>
                            <input type="number" placeholder="Enter number" />
                        </div>

                        <div>
                            <label htmlFor="number">Suggested Price:</label>
                            <input type="number" placeholder="GHs" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="location">Pickup Location</label>
                            <input type="text" placeholder="Enter location"/>
                        </div>

                        <div>
                            <label htmlFor="text">Dropoff Location</label>
                            <input type="text" placeholder="Enter dropoff location" />
                        </div>
                    </div>
                    
                    <div>
                        <button className="drive-modal-button">Complete</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DriveModal;