import React from 'react';
import QrCode from './common/qrCode';
import uberApp from '../img/uber-img11.png';
import driveApp from '../img/uber-img12.png';
import arrowImg from '..//img/uber-img13.png';
import '../styles/AppDownloadSection.css';




const AppDownloadSection: React.FC = () => {
    return (
        <div>
            <section className='app-section' aria-labelledby="app-section-title">
                <h2 id="app-section-title">It's easier in the apps</h2>
                
                <div className='qr-section'>
                    <QrCode
                    icon={uberApp}
                    title='Download the Uber app'
                    description='Scan to download'
                    arrow={arrowImg}
                    />

                    <QrCode
                    icon={driveApp}
                    title='Download the Driver App'
                    description='Scan to download'
                    arrow={arrowImg}
                    />
                </div>
            </section>
        </div>

    );

};

export default AppDownloadSection;

