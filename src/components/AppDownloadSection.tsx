import React from "react";
import QrCode from "./common/qrCode";
import uberApp from "../img/uber-img11.png";
import driveApp from "../img/uber-img12.png";
import arrowImg from "..//img/uber-img13.png";
import "../styles/AppDownloadSection.css";

const AppDownloadSection: React.FC = () => {
    return (
        <div>
            <section className="app-section" aria-labelledby="app-section-title">
                <h2 id="app-section-title">It's easier in the apps</h2>

                <div className="qr-section">
                    <QrCode
                        icon={uberApp}
                        title="Download the Uber app"
                        description="Scan to download"
                        arrow={arrowImg}
                        linkHref="https://www.uber.com/global/en/ride/app/?referrer=singular_click_id%3D043e1e04-1dce-496a-baf0-1aca478dbd1e"
                    />

                    <QrCode
                        icon={driveApp}
                        title="Download the Driver App"
                        description="Scan to download"
                        arrow={arrowImg}
                        linkHref="https://apps.apple.com/us/app/uber-driver-drive-deliver/id1131342792"
                    />
                </div>
            </section>
        </div>
    );
};

export default AppDownloadSection;
