import React from "react";
import Section from "./common/Section";
import '../styles/DriveSection.css';
import driveImg from '../img/uber-img8.webp';

const DriveSection: React.FC = () => {
    return (
        <div>
            <div className="drive-section">
                <Section
                  icon={driveImg}
                  title="Drive when you want, make what you need"
                  description="Make money on your schedule with deliveries or rides-or both. You can use your own car or choose a rental through Uber"
                  buttonText="Get Started"
                  link="Already have an account? Sign in"
                  reverse
                />
            </div>
        </div>
    )

}

export default DriveSection;