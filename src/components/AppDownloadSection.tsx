import React from 'react';
import QrCode from './common/qrCode';
import uberApp from '../img/uber-img11.png';
import driveApp from '../img/uber-img12.png';
import arrowImg from '..//img/uber-img13.png';
import '../styles/AppDownloadSection.css';




const AppDownloadSection: React.FC = () => {
    return (
        <div>
            <div className='app-section'>
                <h2>It's easier in the apps</h2>
                
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
            </div>
        </div>

    );

};

export default AppDownloadSection;

