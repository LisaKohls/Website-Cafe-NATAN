import React from "react";
import "../styles/pages/Privacy.css";
import {datenschutz} from "../resources/textInhalte";
import Text from '../components/text/Text'

function PrivacyPage() {
    return (
        <div className="privacy">
            <div className="sectionPadding"/>
            <Text text={datenschutz} formatierung='block' color='white'/>
        </div>
    )
}

export default PrivacyPage;