import React from "react";
import "../styles/pages/ImpressumAndPrivacy.css";
import {datenschutz} from "../resources/textContent/impressumAndPrivacyText";

function PrivacyPage() {
    return (
        <div className="impressumAndPrivacy">
            <div className="sectionPadding"/>
            <div className="impressumAndPrivacyText">
                {datenschutz}
            </div>
        </div>
    )
}

export default PrivacyPage;