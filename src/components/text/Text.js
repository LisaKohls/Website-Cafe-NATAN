import "../../styles/text/Text.css";
import React from "react";

function Text(props) {
    return (
        <div className={props.color + props.formatierung}>
                {props.text}
        </div>
    )
}

export default Text;
