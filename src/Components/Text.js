import "../Styles/Text.css";
import React from "react";

function Text(props){
    return(
        <div className="text" >
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default Text;