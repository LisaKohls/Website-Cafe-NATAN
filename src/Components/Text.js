import "../Styles/Text.css";
import  React from "react";



const Text=(props)=>{
    return(

        <div className="text" >
            <div style={{width: "20rem"}}>
                {props.text}
            </div>
        </div>
    )
}

export default Text;