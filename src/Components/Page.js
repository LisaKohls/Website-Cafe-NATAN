import React from 'react';
import wheel from "../Resources/Kreis.svg";
import Wheel from "./Wheel";
import "../Styles/Page.css";

function Page({ children, className, style, bottomWheel }) {
    return (
        <div className={`page ${className} ${bottomWheel ? "with-bottom-wheel" : null}`} style={style}>
            {children}
            {bottomWheel && <Wheel name='wheel' image={wheel}/>}
        </div>
    );
}

export default Page;
