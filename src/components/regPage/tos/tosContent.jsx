import React from "react";
import userAgreementData from "../../../data/userAgreement.json";

function TosContent() {
    return (
        <div>
            <div className="container" style={{marginTop: "130px", marginBottom: "50px"}}>
            {userAgreementData.sections.map((section, index) => (
                <div key={index} className="terms-section mb-3">
                <span className="badge rounded-pill mb-2 d-inline-block" style={{backgroundColor: "var(--tg-theme-button-color)", color: "var(--tg-theme-button-text-color)", padding: "8px 0px"}}>{section.heading}</span>
                <p className="text-start fw-light" style={{color: "var(--tg-theme-text-color)"}}>{section.content}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default TosContent;