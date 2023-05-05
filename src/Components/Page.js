import React from 'react';
import Wheel from "./Wheel";
import "../Styles/Page.css";

function Page({ children, className, style, bottomWheel }) {
    return (
        <div className={`page ${className} ${bottomWheel ? " with-bottom-wheel" : null}`} style={style}>
            {children}
            {bottomWheel && <Wheel/>}
        </div>
    );
}

export default Page;
