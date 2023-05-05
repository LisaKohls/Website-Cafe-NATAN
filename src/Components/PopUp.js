import React from 'react'
import '../Styles/PopUp.css'

function PopUp(props){
    return(props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='closeBtn' onClick={() => {
                    props.setTrigger(false);
                    document.body.style.overflow = "auto";}}>close</button>
                { props.children }
            </div>
        </div>
    ) : ""
}
export default PopUp