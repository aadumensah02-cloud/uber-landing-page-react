import React from "react";
import '../../styles/Card.css';


interface CardProps {
    icon?: string;
    title: string;
    description?: string;
    buttonText?: string; 
}
    
const Card: React.FC<CardProps> = ({ icon, title, description, buttonText }) => {
    return (
       <div className="card">
            <div className="card-text">
              <h3 className="card-title">{title}</h3>
              {description && <p className="card-description">{description}</p>}
              {buttonText && <button className="card-button">{buttonText}</button>}
           </div>

          <img src={icon} alt={title} className="card-icon"/>
       </div>
    );
};

export default Card;