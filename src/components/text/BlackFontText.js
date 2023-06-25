import "../../styles/text/BlackFontText.css";
import React from "react";

function BlackFontText(props){
    return(
        <div className={props.formatierung} >
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default BlackFontText;