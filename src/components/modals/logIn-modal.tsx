import React from "react";
import "../../styles/modal-styles/logIn-modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser, faLock, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface logInModalProps {
    isLogInOpen: boolean;
    onClose: () => void;
}


const LogInModal: React.FC<logInModalProps> = ({isLogInOpen, onClose}) => {
    // const [isOpen, setIsOpen] = useState(false);

    if (!isLogInOpen) return null;

    return (
        <div>
            <div className="overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>

                    <h2>Sign In to your account</h2>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <div className="input-box">
                            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                            <input type="text" placeholder="Enter pickup location"  className="signIn-input"/>
                        </div>

                        <label htmlFor="username">Username:</label>
                        <div className="input-box">
                            
                            <FontAwesomeIcon icon={faUser} className="input-icon" />
                            <input type="text" placeholder="Username"  className="signIn-input"/>
                        </div>

                        <label htmlFor="password">Password:</label>
                        <div className="input-box">
                            <FontAwesomeIcon icon={faLock} className="input-icon" />
                            <input type="password" placeholder="* * * * * * * * "  className="signIn-input"/>
                        </div>
                    </div>

                    <div>
                        <button className="signin-modal-button">Sign In<FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>

                    <div className="divider">
                        <span>or</span>
                    </div>
                    

                    <div className="continue-modal">
                        <button className="google-button">Continue with Google <FontAwesomeIcon icon={faGoogle} /> </button>
                        <button className="google-button">Continue with SSH</button>
                    </div>

                    
                    

                </div>

            </div>
        </div>
    )
}

export default LogInModal;