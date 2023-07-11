import React from "react";
import "../../styles/pages/Impressum.css";
import {impressum} from "../../resources/textInhalte";
import Text from "../text/Text";

function ImpressumPage() {
    return (
        <div className="impressum">
            <div className="sectionPadding"/>
            <Text text={impressum} formatierung='block' color='white'/>
        </div>
    )
}

export default ImpressumPage;
