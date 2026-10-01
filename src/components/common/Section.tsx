import React, {useState } from "react";
import '../../styles/Section.css';
import DriveModal from "../modals/drive-modal";

interface SectionProps {
    icon?: string;
    title: string;
    description: string;
    buttonText: string;
    link: string;
    reverse?: boolean;
} 

const Section: React.FC<SectionProps> = ({icon, title, description, buttonText, link, reverse }) => {

    const [isDriveOpen, setIsDriveOpen] = useState(false);

    return (
        <div>
            <div className={`section ${reverse ? 'section-reverse' : ''}`}>
                <div className="section-text">
                    <h2 className="section-title">{title}</h2>
                    <p className="section-description">{description}</p>

                    <div className="Section-lower">
                       <button className="section-button" onClick={() => setIsDriveOpen(true)}>{buttonText}</button>
                       <a className='section-link' href="#">{link}</a>
                    </div>
                    
                </div>

                <img src={icon} alt="" className="section-icon" />

            </div>
            
            <DriveModal isDriveOpen={isDriveOpen} onClose={() => setIsDriveOpen(false)} />
            
        </div>
    )
}

export default Section;