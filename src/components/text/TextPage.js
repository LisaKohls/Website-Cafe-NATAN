import "../../styles/text/Text.css";
import React from "react";

function TextPage(props) {
    return (
        <div className={props.color + props.formatierung}>
            {props.text}
        </div>
    )
}

export default TextPage;