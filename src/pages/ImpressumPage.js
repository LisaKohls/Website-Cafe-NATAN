import React from "react";
import "../styles/pages/Impressum.css";
import {impressum} from "../resources/textContent/impressumAndPrivacyText";
import TextPage from "../components/text/TextPage";

function ImpressumPage() {
    return (
        <div className="impressum">
            <div className="sectionPadding"/>
            <TextPage text={impressum} formatierung='block' color='white'/>
        </div>
    )
}

export default ImpressumPage;
