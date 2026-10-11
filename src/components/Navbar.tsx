import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import navImg from "../img/uber-img14.png";
import SignupModal from "./modals/signup-modal";
import LogInModal from "./modals/logIn-modal";

const Navbar: React.FC = () => {
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isLogInOpen, setIsLogInOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("menu-open", menuOpen);
        document.body.classList.toggle("menu-open", menuOpen);

        return () => {
            document.documentElement.classList.remove("menu-open");
            document.body.classList.remove("menu-open");
        };
    }, [menuOpen]);

    return (
        <header>
            <div className="navbar-section">
                <h1 id="uber-id">Uber</h1>
                <div className="nav-left-side-section">
                    <nav>
                        <ul id="nav-links" className={menuOpen ? "mobile-open" : ""}>
                            <li>
                                <a
                                    href="https://m.uber.com/go/home?marketing_vistor_id=84989796-7f56-4b7b-87b7-9a09f9904772&uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169"
                                    className="nav-links"
                                >
                                    Ride
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://m.uber.com/go/home?marketing_vistor_id=84989796-7f56-4b7b-87b7-9a09f9904772&uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169"
                                    className="nav-links"
                                >
                                    Drive
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.uber.com/gh/en/business/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169"
                                    className="nav-links"
                                >
                                    Business
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.ubereats.com/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169&marketing_vistor_id=84989796-7f56-4b7b-87b7-9a09f9904772"
                                    className="nav-links"
                                >
                                    Uber Eats
                                </a>
                            </li>
                            <li className="accordion-item">
                                <button
                                    className={`accordion-toggle ${openAccordion === "about" ? "open" : ""}`}
                                    onClick={() =>
                                        setOpenAccordion(openAccordion === "about" ? null : "about")
                                    }
                                >
                                    About
                                    <img src={navImg} alt="" className="chevron" />
                                </button>
                                <ul
                                    className={`accordion-panel ${openAccordion === "about" ? "open" : ""}`}
                                >
                                    <li>
                                        <a href="https://www.uber.com/gh/en/about/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                                            About us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.uber.com/our-offerings/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                                            Our offerings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.uber.com/how-uber-works/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                                            How Uber works
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.uber.com/sustainability/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                                            Sustainability
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.uber.com/explore/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                                            Explore
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.uber.com/newsroom/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                                            Newsroom
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://investor.uber.com/home/default.aspx">
                                            Investor Relations
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.uber.com/gh/en/autonomous/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                                            Autonomous
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.uber.com/blog/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.uber.com/careers/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="nav-actions">
                    <div className="nav-right-side-section">
                        <button className="eng-button">EN</button>
                        <a
                            href="https://help.uber.com/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169"
                            className="nav-help-button"
                        >
                            Help
                        </a>
                        <button
                            className="nav-log-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsLogInOpen(true);
                            }}
                        >
                            Log in
                        </button>
                        <button className="signup-button" onClick={() => setIsSignupOpen(true)}>
                            Sign up
                        </button>
                    </div>
                
                    {!menuOpen ? (
                        <button className="mobile-button" onClick={() => setMenuOpen(true)}>
                            ☰
                        </button>
                    ) : (
                        <button className="close-button" onClick={() => setMenuOpen(false)}>
                            ✕
                        </button>
                    )}
                </div>
            </div>

            <SignupModal isSignupOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
            <LogInModal isLogInOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)} />
        </header>
    );
};

export default Navbar;
