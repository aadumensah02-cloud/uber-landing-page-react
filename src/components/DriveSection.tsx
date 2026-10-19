import React, { useState } from "react";
import Section from "./common/Section";
import driveImg from "../img/uber-img8.webp";
import DriveModal from "./modals/drive-modal";

const DriveSection: React.FC = () => {
    const [isDriveOpen, setIsDriveOpen] = useState(false);

    return (
        <div>
            <div className="drive-section">
                <Section
                    icon={driveImg}
                    title="Drive when you want, make what you need"
                    description="Make money on your schedule with deliveries or rides-or both. You can use your own car or choose a rental through Uber"
                    buttonText="Get Started"
                    //   onButtonClick={() => setIsDriveOpen(true)}
                    linkHref="https://auth.uber.com/v2?marketing_vistor_id=84989796-7f56-4b7b-87b7-9a09f9904772&next_url=https%3A%2F%2Fwww.uber.com&uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169"
                    link="Already have an account? Sign in"
                    reverse
                />
            </div>

            <DriveModal isDriveOpen={isDriveOpen} onClose={() => setIsDriveOpen(false)} />
        </div>
    );
};

export default DriveSection;
