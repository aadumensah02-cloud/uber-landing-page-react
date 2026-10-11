import React, { useState } from "react";
import "../styles/ReserveFeature.css";
import reserveImg from "../img/uber-img10.png";
import PlanModal from "./modals/plan-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faClock as faClockRegular } from "@fortawesome/free-regular-svg-icons";

const ReserveFeature: React.FC = () => {
    const [isPlanOpen, setIsPlanOpen] = useState(false);

    return (
        <div>
            <section className="reserve-section" aria-labelledby="reserve-section-title">
                <h2 id="reserve-section-title">Plan for later</h2>
                <div className="reserve-content">
                    <div className="reserve-left">
                        <div className="reserve-text">
                            <h2>
                                Get your ride right <br />
                                with Uber Reserve
                            </h2>
                            <p>Choose date and time</p>

                            <div className="reserve-input">
                                <div className="reserve-date">
                                    <label htmlFor="date">Date</label>
                                    <div className="field-box">
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}
                                            className="field-icon"
                                        />
                                        <input type="date" id="date" />
                                    </div>
                                </div>
                                <div className="reserve-time">
                                    <label htmlFor="time">Time</label>
                                    <div className="field-box">
                                        <FontAwesomeIcon icon={faClock} className="field-icon" />
                                        <input type="time" id="time" />
                                    </div>
                                </div>
                            </div>

                            <button className="reserve-button" onClick={() => setIsPlanOpen(true)}>
                                Next
                            </button>
                        </div>

                        <div className="reserve-image">
                            <img src={reserveImg} alt="" className="reserve-img" />
                        </div>
                    </div>

                    <div className="reserve-right">
                        <h2>Benefits</h2>
                        <div className="reserve-right-text">
                            <div className="reserve-text-benefit">
                                <FontAwesomeIcon icon={faCalendarDays} className="benefit-icon" />
                                <p>Choose your exact pickup time up to 90 days in advance.</p>
                            </div>
                            <hr />

                            <div className="reserve-text-benefit">
                                <FontAwesomeIcon icon={faClockRegular} className="benefit-icon" />
                                <p>Extra wait time included to meet yout ride.</p>
                            </div>
                            <hr />

                            <div className="reserve-text-benefit">
                                <FontAwesomeIcon icon={faCreditCard} className="benefit-icon" />
                                <p>Cancel at no charge up to 60 minutes in advance.</p>
                            </div>
                            <hr />
                        </div>
                        <a href="https://www.uber.com/gh/en/legal/general-terms-of-use/?uclick_id=303037f0-ab18-4f1a-bc51-2b66391c6169">
                            See terms
                        </a>
                    </div>
                </div>
            </section>

            <PlanModal isPlanOpen={isPlanOpen} onClose={() => setIsPlanOpen(false)} />
        </div>
    );
};

export default ReserveFeature;
