import React from "react";
import "../styles/pages/Privacy.css";
import {datenschutz} from "../resources/textContent/impressumAndPrivacyText";
import TextPage from "../components/text/TextPage";

function PrivacyPage() {
    return (
        <div className="privacy">
            <div className="sectionPadding"/>
            <TextPage text={datenschutz} formatierung='block' color='white'/>
        </div>
    )
}

export default PrivacyPage;