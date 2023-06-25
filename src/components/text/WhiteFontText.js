import "../../styles/text/WhiteFontText.css";
import React from "react";

function WhiteFontText(props){
    return(
        <div className={props.formatierung} >
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default WhiteFontText;