import React from 'react'
import ImgPosition from "../ImgPosition";
import NatanLogo from "../../Resources/logos/Natan_Logo_white.png";
import Bar from "../../Resources/gallery/barNatan1_edited.jpg";
import WheelWhite from '../../Resources/logos/rad_weiß.png'

function FirstSection(){
    return(
        <div>
            <ImgPosition name='wheelleft' image={WheelWhite}/>
            <ImgPosition name='logo' image={NatanLogo}/>
            <ImgPosition name='bar' image={Bar}/>
        </div>
    )
}

export default FirstSection