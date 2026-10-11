import React from "react";
import "../../styles/Card.css";
import useIsMobile from "../../useIsMobile";

interface CardProps {
    icon?: string;  //image found in the section
    title: string;  //header of each section
    description?: string;  // text description of seach section
    buttonText?: string; //text shown in the secondary button
    onButtonClick?: () => void;  //beginner stage, clicking doesn't cause any reaction
}

const Card: React.FC<CardProps> = ({ icon, title, description, buttonText, onButtonClick }) => {
    const isMobile = useIsMobile();


    const handleCardKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onButtonClick?.();
        }
    };

    return (
        <div 
            className="card"
            onClick={isMobile? onButtonClick : undefined}
            onKeyDown={isMobile ? handleCardKeyDown : undefined}
            role={isMobile ? "button" : undefined}
            tabIndex={isMobile ? 0 : undefined}
        >
            <div className="card-text">
                <h3 className="card-title">{title}</h3>
                {description && <p className="card-description">{description}</p>}
                {buttonText && (
                    <button className="card-button" type="button" onClick={onButtonClick}>
                        {buttonText}
                    </button>
                )}
            </div>

            <img src={icon} alt="" className="card-icon" />
        </div>
    );
};

export default Card;
