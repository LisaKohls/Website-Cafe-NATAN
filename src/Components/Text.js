import "../Styles/Text.css";
import React from "react";

function Text(props){
    return(
        <div className={props.formatierung} >
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default Text;