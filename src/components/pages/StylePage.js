import React from 'react';
import Wheel from "../interactiveelements/Wheel";
import "../../styles/pages/StylePage.css";
import wheel from '../../resources/logos/Kreis.svg'

function StylePage({children, className, style, bottomWheel}) {
    return (
        <div className={`page ${className} ${bottomWheel ? " with-bottom-wheel" : null}`} style={style}>
            {children}
            {bottomWheel && <Wheel wheel={wheel} title='wheel'/>}
        </div>
    );
}

export default StylePage;
