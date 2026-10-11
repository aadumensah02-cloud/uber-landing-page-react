import React from "react";
import businessImg from "../img/uber-img9.webp";
import Section from "./common/Section";

const BusinessSection: React.FC = () => {
    return (
        <div>
            <div className="business-section">
                <Section
                    title="The Uber you know, reimagined for business"
                    description="Uber for Business is a platform for managing global rides and meals, annd local deliveries, for companies of any size."
                    buttonText="Get Started"
                    link="Check out our solutions"
                    linkHref="https://auth.uber.com/v2?marketing_vistor_id=84989796-7f56-4b7b-87b7-9a09f9904772&next_url=https%3A%2F%2Fwww.uber.com&uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169"
                    icon={businessImg}
                />
            </div>
        </div>
    );
};

export default BusinessSection;
