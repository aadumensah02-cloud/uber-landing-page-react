import React, { useId } from "react";
import "../../styles/modal-styles/signup-modal.css";
import { useModalFocus } from "../../useModalFocus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import useScrollLock from "../../useScrollLock";

interface SignupModelProps {
    isSignupOpen: boolean;
    onClose: () => void;
}

const SignupModal: React.FC<SignupModelProps> = ({ isSignupOpen, onClose }) => {
    useScrollLock(isSignupOpen);
    const titleId = useId();
    // Hooks must run before the early return below (Rules of Hooks)
    const dialogRef = useModalFocus(isSignupOpen, onClose);

    // Render nothing while closed so the modal mounts fresh on each open
    if (!isSignupOpen) return null;

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
                    className="signup-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    tabIndex={-1}
                >
                    <button className="signup-close-btn" onClick={onClose} aria-label="Close">
                        &times;
                    </button>

                    <div className="signup-modal-content">
                        <h2 id={titleId}>Create an account </h2>
                        <span className="account-span">
                            Create an account to enjoy the services of Uber
                        </span>

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

                        <button className="signup-modal-button" onClick={onClose}>Create Account</button>

                        <div className="signup-modal-span">
                            <span>or</span>
                        </div>

                        <div className="signup-button-modal">
                            <button className="signup-google-button" onClick={onClose}>
                                Continue with Google{" "}
                                <FontAwesomeIcon icon={faGoogle} aria-hidden="true" />{" "}
                            </button>
                            <button className="signup-apple-button" onClick={onClose}>
                                Continue with Apple{" "}
                                <FontAwesomeIcon icon={faApple} aria-hidden="true" />{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default SignupModal;
