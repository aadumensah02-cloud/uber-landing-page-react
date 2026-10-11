import React, { useState, useId } from "react";
import "../../styles/Section.css";
import DriveModal from "../modals/drive-modal";

interface SectionProps {
    icon?: string;  //image shown in the business and city section
    title: string;  // heading shown in both sections
    description: string;  //text description
    buttonText: string; // text shown in the secondary button
    link: string;  //text shown in the secondary link
    linkHref: string; //url of the secondary link shown
    reverse?: boolean;  //true = imageon the left, text on the right
    actionsClassName?: string;
}

const Section: React.FC<SectionProps> = ({
    icon,
    title,
    description,
    buttonText,
    link,
    linkHref,
    reverse,
    actionsClassName = "actions-column",
}: SectionProps) => {
    const titleId = useId();

    //Each section owns its own Drive modal state, so only one opens at a time
    const [isDriveOpen, setIsDriveOpen] = useState(false);

    return (
        <div>
            <section
                className={`section ${reverse ? "section-reverse" : ""}`}
                //aria-labelledby gives the <section> an accessible name from its heading
                aria-labelledby={titleId}
            >
                <div className="section-text">
                    <h2 id={titleId} className="section-title">
                        {title}
                    </h2>
                    <p className="section-description">{description}</p>

                    <div className={`Section-lower ${actionsClassName}`}>
                        <button className="section-button" onClick={() => setIsDriveOpen(true)}>
                            {buttonText}
                        </button>
                        <a className="section-link" href={linkHref}>
                            {link}
                        </a>
                    </div>
                </div>

                <img src={icon} alt="" className="section-icon" />
            </section>

            <DriveModal isDriveOpen={isDriveOpen} onClose={() => setIsDriveOpen(false)} />
        </div>
    );
};

export default Section;
