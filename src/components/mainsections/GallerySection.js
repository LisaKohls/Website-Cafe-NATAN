import React from 'react'
import ScrollImages from "../interactiveelements/ScrollImages";
import Img1 from "../../resources/gallery/barNatan1.jpg";
import Img2 from "../../resources/gallery/barNatan2.jpg";
import Img3 from "../../resources/gallery/outsideViewNatan.jpg";
import Img4 from "../../resources/gallery/interiorNatan.jpg";
import Img5 from "../../resources/gallery/210705_NATAN_WEB-1.jpg";
import Img6 from "../../resources/gallery/210705_NATAN_WEB-6.jpg";
import Img7 from "../../resources/gallery/Natan_21.jpg";
import Img8 from "../../resources/gallery/Natan_37.jpg";
import Img9 from "../../resources/gallery/Natan_23 (1).jpg";
import Img10 from "../../resources/gallery/210705_NATAN_WEB-25.jpg";
import Img11 from "../../resources/gallery/Natan_9.jpg";
import Img12 from "../../resources/gallery/210705_NATAN_WEB-58.jpg";
import Img13 from "../../resources/gallery/Natan_24.jpg";
import Img14 from "../../resources/gallery/Bild-12.jpg";
import Img15 from "../../resources/gallery/210705_NATAN_WEB-69.jpg";
import Img16 from "../../resources/gallery/210705_NATAN_WEB-31 (1).jpg";
import Img17 from "../../resources/gallery/Natan_11.jpg";
import Img18 from "../../resources/gallery/STELP-Cinnema for good_9.jpg";
import Img19 from "../../resources/gallery/Natan_14.jpg";
import Img20 from "../../resources/gallery/Natan_27.jpg";
import Img21 from "../../resources/gallery/Volunteers8.jpg";
import Img22 from "../../resources/gallery/Natan_13.jpg";
import Img23 from "../../resources/gallery/210705_NATAN_WEB-21.jpg";
import Img24 from "../../resources/gallery/Natan_18.jpg";

function GallerySection(){
    const images = [
        {src: Img1, alt: 'Natan Bar'},
        {src: Img2, alt: 'Natan Bar'},
        {src: Img3, alt: 'Outside View Natan'},
        {src: Img4, alt: 'Interior Natan'},
        {src: Img5, alt: 'food closeup'},
        {src: Img6, alt: 'Natan Bar'},
        {src: Img7, alt: 'Natan Bar'},
        {src: Img8, alt: 'Outside View Natan'},
        {src: Img9, alt: 'Interior Natan'},
        {src: Img10, alt: 'food closeup'},
        {src: Img11, alt: 'Natan Bar'},
        {src: Img12, alt: 'Natan Bar'},
        {src: Img13, alt: 'Outside View Natan'},
        {src: Img14, alt: 'Outside View Natan'},
        {src: Img15, alt: 'Outside View Natan'},
        {src: Img16, alt: 'Outside View Natan'},
        {src: Img17, alt: 'Outside View Natan'},
        {src: Img18, alt: 'Outside View Natan'},
        {src: Img19, alt: 'Outside View Natan'},
        {src: Img20, alt: 'Outside View Natan'},
        {src: Img21, alt: 'Outside View Natan'},
        {src: Img22, alt: 'Outside View Natan'},
        {src: Img23, alt: 'Outside View Natan'},
        {src: Img24, alt: 'Outside View Natan'},
    ];
    return(<ScrollImages images={images}/>)
}

export default GallerySection