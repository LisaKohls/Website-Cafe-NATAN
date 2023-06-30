import React from 'react'
import ImgPosition from "../images/ImgPosition";
import NatanLogo from "../../resources/logos/Natan_Logo_white.png";
import Bar from "../../resources/gallery/barNatan1_edited.jpg";
import WheelWhite from '../../resources/logos/rad_weiß.png'
import Wheel from "../interactiveElements/Wheel";

function FirstSection(){
    return(
        <>
            <Wheel wheel={WheelWhite} title="wheelWhite"/>
            <ImgPosition name='logo' image={NatanLogo}/>
            <ImgPosition name='bar' image={Bar}/>
        </>
    )
}

export default FirstSection