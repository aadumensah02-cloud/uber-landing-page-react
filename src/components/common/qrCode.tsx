import React from "react";
import '../../styles/qrCode.css';


interface qrCodeprops {
    icon?: string;
    title: string;
    description: string;
    arrow: string;
}

const QrCode: React.FC<qrCodeprops> = ({icon, title, description, arrow}) => {
    return (
       <div> 
            <a href="#" className="qrCode">
                <div className="qr-content">
                    <div className="qr-scan">
                        <img src={icon} alt="" className="qr-img"/>
                    </div>

                    <div className="qr-text">
                        <div className="qr-left">
                            <h2 className="qr-title">{title}</h2>
                            <span className="qr-description">{description}</span>
                        </div>
    
                        <img src={arrow} alt="" className="qr-arrow" /> 
                    </div>
                </div>
            </a> 
       </div> 
    )
}

export default QrCode;