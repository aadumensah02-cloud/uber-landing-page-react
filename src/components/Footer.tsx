import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faYoutube, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
    return (
        <div className="footer-section">
            <footer>
                <div className="uber-logo">
                    <a href="#uber-id" className="uber-link">
                        Uber
                    </a>
                    <a
                        href="https://help.uber.com/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169"
                        className="uber-link"
                    >
                        Visit Help Center
                    </a>
                </div>

                <div className="uber-content">
                    <div className="uber-section">
                        <span>Company</span>
                        <a href="https://www.uber.com/gh/en/about/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            About us
                        </a>
                        <a href="https://www.uber.com/gh/en/our-offerings/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Our offerings
                        </a>
                        <a href="https://www.uber.com/gh/en/newsroom/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Newsroom
                        </a>
                        <a href="https://investor.uber.com/home/default.aspx">Investors</a>
                        <a href="https://www.uber.com/blog/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Blog
                        </a>
                        <a href="https://www.uber.com/careers/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Careers
                        </a>
                    </div>

                    <div className="uber-section">
                        <span>Products</span>
                        <a href="https://m.uber.com/go/home?marketing_vistor_id=84989796-7f56-4b7b-87b7-9a09f9904772&uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Ride
                        </a>
                        <a href="https://www.uber.com/gh/en/drive/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Drive
                        </a>
                        <a href="https://www.ubereats.com/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169&marketing_vistor_id=84989796-7f56-4b7b-87b7-9a09f9904772">
                            Eat
                        </a>
                        <a href="https://www.uber.com/gh/en/business/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Uber for Business
                        </a>
                        <a href="https://www.uber.com/gh/en/freight/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Uber Freight
                        </a>
                        <a href="https://www.uber.com/gh/en/gift-cards/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Gift cards
                        </a>
                        <a href="https://www.uberhealth.com/gh/en/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169&marketing_vistor_id=84989796-7f56-4b7b-87b7-9a09f9904772">
                            Uber Health
                        </a>
                    </div>

                    <div className="uber-section">
                        <span>Global citizenship</span>
                        <a href="https://www.uber.com/gh/en/safety/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Safety
                        </a>
                        <a href="https://www.uber.com/gh/en/about/sustainability/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Sustainability
                        </a>
                    </div>

                    <div className="uber-section">
                        <span>Travel</span>
                        <a href="https://auth.uber.com/v2/?breeze_init_req_id=909faa06-67ff-4480-9778-f4e951bf0ab6&breeze_local_zone=dca24&next_url=https%3A%2F%2Fm.uber.com%2Fgo%2Flogin-redirect%2F%3F_fallback_redirect%3Dhttp%253A%252F%252Fm.uber.com%252Freserve%26mvid%3D84989796-7f56-4b7b-87b7-9a09f9904772%26pcn%3Dubercom-footer%26previousPathname%3D%252Fgo%252Freserve%26referrer%3Dsingular_click_id%253D183cc62d-4215-40ab-b561-2780381dd0d2%26sl_id%3Do42y%26uclick_id%3D303037f0-ab18-4f1a-bc51-2b66391c6169&sm_flow_id=4VZo7EDo&state=QSJBGfmmrEuNsmK6FwhlBa-vb8GZwGqs2uI16KMY4J0%3D">
                            Reserve
                        </a>
                        <a href="https://www.uber.com/gh/en/airports/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Airports
                        </a>
                        <a href="https://www.uber.com/gh/en/hotels/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Hotels
                        </a>
                        <a href="https://www.uber.com/gh/en/cities/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Cities
                        </a>
                    </div>
                </div>

                <div className="footer-info">
                    <div className="footer-social">
                        <a href="https://www.linkedin.com/company/uber-com/" aria-label="LinkedIn">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                aria-hidden="true"
                                focusable="false"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCgnxoUwDmmyzeigmmcf0hZA?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169"
                            aria-label="YouTube"
                        >
                            <FontAwesomeIcon
                                icon={faYoutube}
                                aria-hidden="true"
                                focusable="false"
                            />
                        </a>
                        <a href="https://www.instagram.com/uber/" aria-label="Instagram">
                            <FontAwesomeIcon
                                icon={faInstagram}
                                aria-hidden="true"
                                focusable="false"
                            />
                        </a>
                        <a href="https://twitter.com/uber" aria-label="X">
                            <FontAwesomeIcon
                                icon={faXTwitter}
                                aria-hidden="true"
                                focusable="false"
                            />
                        </a>
                    </div>

                    <div className="uber-buttons">
                        <button type="button" aria-haspopup="listbox" aria-expanded="false">
                            <FontAwesomeIcon icon={faGlobe} aria-hidden="true" />
                            English
                        </button>
                        <button type="button" aria-haspopup="listbox" aria-expanded="false">
                            <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
                            Accra
                        </button>
                    </div>
                </div>

                <div className="uber-terms">
                    <div>
                        <span>@2026 Uber Technologies Inc.</span>
                    </div>
                    <div className="uber-terms-link">
                        <a href="https://www.uber.com/global/en/privacy-notice-riders-order-recipients/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Privacy
                        </a>
                        <a href="https://www.uber.com/gh/en/about/accessibility/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Accessibility
                        </a>
                        <a href="https://www.uber.com/gh/en/legal/general-terms-of-use/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            Terms
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
