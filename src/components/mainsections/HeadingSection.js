import React from 'react'
import ImgPosition from "../images/ImgPosition";
import NatanLogo from "../../resources/logos/Natan_Logo_white.png";
import Bar from "../../resources/gallery/barNatan1_edited.png";
import WheelWhite from '../../resources/logos/rad_weiß.png'
import Wheel from "../interactiveelements/Wheel";

function HeadingSection() {
    return (
        <>
            <Wheel wheel={WheelWhite} title="wheelWhite"/>
            <ImgPosition name='logo' image={NatanLogo}/>
            <ImgPosition name='bar' image={Bar}/>
        </>
    )
}

export default HeadingSection