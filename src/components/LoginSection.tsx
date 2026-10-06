import React, { useState} from "react";
import '../styles/LoginSection.css';
import loginImg from '../img/uber-img6.svg'
import LogInModal from "./modals/logIn-modal";

const LoginSection: React.FC = () => {

const [isLogInOpen, setIsLogInOpen] = useState(false);

    return (
       <div>
            <section className="login-section" aria-labelledby="login-section-title">
                <div className="log-in-text">
                <h2 id="login-section-title">Log in to see your account details</h2>
                <p>View past trips, tailored suggestions, support resources, and more.</p>
                <div className="log-in-button">
                    <button  onClick={() => setIsLogInOpen(true)} >Log in to your account</button>
                    <a href="#">Create an account</a>
                </div>
                </div>
                <img src={loginImg} alt="" className="log-in-img"></img>
            </section>

            <LogInModal isLogInOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)} />
       </div>
    );

};

export default LoginSection;