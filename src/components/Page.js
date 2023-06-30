import React from 'react';
import Wheel from "./interactiveElements/Wheel";
import "../styles/Page.css";
import wheel from '../resources/logos/Kreis.svg'

function Page({ children, className, style, bottomWheel }) {
    return (
        <div className={`page ${className} ${bottomWheel ? " with-bottom-wheel" : null}`} style={style}>
            {children}
            {bottomWheel && <Wheel wheel={wheel} title='wheel'/>}
        </div>
    );
}

export default Page;
