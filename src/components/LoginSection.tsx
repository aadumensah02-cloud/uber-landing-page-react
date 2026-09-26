import React from "react";
import '../styles/LoginSection.css';
import loginImg from '../img/uber-img6.svg'

const LoginSection: React.FC = () => {
    return (
       <div>
        <div className="login-section">
            <div className="log-in-text">
              <h2>Log in to see your account details</h2>
              <p>View past trips, tailored suggestions, support resources, and more.</p>
              <div className="log-in-button">
                  <button>Log in to your account</button>
                  <a href="#">Create an account</a>
              </div>
            </div>
            <img src={loginImg} alt="" className="log-in-img"></img>
        </div>
       </div>
    );

};

export default LoginSection;