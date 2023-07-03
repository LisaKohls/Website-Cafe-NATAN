import "../../styles/text/Text.css";
import React from "react";

function Text(props) {
    return (
        <div className={props.color + props.formatierung}>
            <div>
                {props.text}
            </div>
        </div>
    )
}

export default Text;