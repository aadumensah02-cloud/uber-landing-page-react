import React, { useId } from "react";
// import "../../styles/modal-styles/globalmodal.css";
import "../../styles/modal-styles/signup-modal.css";
import { useModalFocus } from "../../useModalFocus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";

interface SignupModelProps {
    isSignupOpen: boolean;
    onClose: () => void;
}


const SignupModal: React.FC<SignupModelProps> = ({isSignupOpen, onClose}) => {
    const titleId = useId();
    const dialogRef = useModalFocus(isSignupOpen, onClose);

    if (!isSignupOpen) return null;
    


    return createPortal (
        <div>
            <div className="overlay" onClick={onClose}>
                <div
                    ref={dialogRef}
                    className="signup-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    tabIndex={-1}
                    onClick={(e) => e.stopPropagation()}>
                
                    <button className="signup-close-btn" onClick={onClose} arial-label="Close">
                        &times;
                    </button>

                    <div className="signup-modal">
                        <h2 id={titleId}>Create an account </h2>
                        <span className="account-span">Create an account to enjoy the services of Uber</span>

                        <div className="signup-top-modal">
                            <div className="firstname-modal">
                                <label htmlFor="name">First Name:</label>
                                <input type="text" placeholder="Eg. John" />
                            </div>

                            <div className="secondname-modal">
                                <label htmlFor="name">Last Name:</label>
                                <input type="text" placeholder="Eg. Doe" />
                            </div>    
                        </div>


                        <label htmlFor="text">E-mail:</label>
                        <div className="email-modal">
                        <FontAwesomeIcon icon={faEnvelope} className="signup-icon" />
                        <input type="text" placeholder="example.com" />
                        </div>

                        <label htmlFor="text">Username:</label>
                        <div className="username-modal">
                            <FontAwesomeIcon icon={faUser} className="signup-icon" />
                            <input type="text" placeholder="username" />
                        </div>

                        <div className="signup-modal-password">
                            <div className="password-col">
                                <label htmlFor="password">Password:</label>
                                <div className="password-modal">
                                    <FontAwesomeIcon icon={faLock} className="signup-icon" />
                                    <input type="password" placeholder="* * * * * * * *" />
                                </div>
                            </div>

                            <div className="password-col">
                                <label htmlFor="password">Confirm Password:</label>
                                <div className="password-modal">
                                    <FontAwesomeIcon icon={faLock} className="signup-icon" />
                                    <input type="password" placeholder="* * * * * * * *" />
                                </div>
                            </div>
                        </div>

                        <button className="signup-modal-button">Create Account</button>

                        <div className="signup-modal-span"><span>or</span></div>
                        
                        <div className="signup-button-modal">
                            <button className="signup-google-button">Continue with Google <FontAwesomeIcon icon={faGoogle} aria-hidden="true" /> </button>
                            <button className="signup-apple-button">Continue with Apple <FontAwesomeIcon icon={faApple} aria-hidden="true" /> </button>
                        </div>


                    </div>
                </div>
               

            </div>
        </div>,
        document.body
    );
}

export default SignupModal;