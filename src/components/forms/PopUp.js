import React from 'react'
import '../../styles/forms/PopUp.css'

function PopUp(props) {
    //this component is showing the pop up if the trigger is true and closing it if the close button is pressed
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className="pop-up-close-btn" onClick={() => {
                    props.setTrigger(false);
                    document.body.style.overflow = "auto";
                }}>✕
                </button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default PopUp