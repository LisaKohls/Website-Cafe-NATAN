import React from 'react'
import '../Styles/PopUp.css'
import { FaTimes } from "react-icons/fa"

function PopUp(props){
    return(props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className="pop-up-close-btn" onClick={() => {
                    props.setTrigger(false);
                    document.body.style.overflow = "auto";
                }}>
                    <FaTimes />
                </button>
                { props.children }
            </div>
        </div>
    ) : ""
}
export default PopUp