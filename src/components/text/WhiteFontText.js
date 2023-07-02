import "../../styles/text/WhiteFontText.css";
import React from "react";

function WhiteFontText(props) {
    return (
        <div className={props.formatierung}>
            <div>
                {props.text}
            </div>
        </div>
    )
}

export default WhiteFontText;