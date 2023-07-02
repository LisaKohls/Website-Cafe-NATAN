import "../../styles/text/BlackFontText.css";
import React from "react";

function BlackFontText(props) {
    return (
        <div className={props.formatierung}>
            <div>
                {props.text}
            </div>
        </div>
    )
}

export default BlackFontText;