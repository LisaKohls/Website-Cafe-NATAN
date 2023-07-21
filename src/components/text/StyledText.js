import "../../styles/text/Text.css";
import React from "react";

function StyledText(props) {
    return (
        <div className={props.color + props.formatierung}>
            {props.text}
        </div>
    )
}

export default StyledText;