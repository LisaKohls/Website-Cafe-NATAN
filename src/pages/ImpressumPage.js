import React from "react";
import "../styles/pages/ImpressumAndPrivacy.css";
import {impressum} from "../resources/textContent/impressumAndPrivacyText";

function ImpressumPage() {
    return (
        <div className="impressumAndPrivacy">
            <div className="sectionPadding"/>
            <div className="impressumAndPrivacyText">
                {impressum}
            </div>
        </div>
    )
}

export default ImpressumPage;
