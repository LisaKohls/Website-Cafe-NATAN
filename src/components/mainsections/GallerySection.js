import React from 'react'
import Gallery from "../scrollimages/Gallery";

function GallerySection(){
    const images = [
        require("../../resources/gallery/barNatan1.jpg"),
        require("../../resources/gallery/barNatan2.jpg"),
        require("../../resources/gallery/outsideViewNatan.jpg"),
        require("../../resources/gallery/interiorNatan.jpg"),
        require("../../resources/gallery/210705_NATAN_WEB-1.jpg"),
        require("../../resources/gallery/210705_NATAN_WEB-6.jpg"),
        require("../../resources/gallery/Natan_21.jpg"),
        require("../../resources/gallery/Natan_37.jpg"),
        require("../../resources/gallery/Natan_23 (1).jpg"),
        require("../../resources/gallery/210705_NATAN_WEB-25.jpg"),
        require("../../resources/gallery/Natan_9.jpg"),
        require("../../resources/gallery/210705_NATAN_WEB-58.jpg"),
        require("../../resources/gallery/Natan_24.jpg"),
        require("../../resources/gallery/Bild-12.jpg"),
        require("../../resources/gallery/210705_NATAN_WEB-69.jpg"),
        require("../../resources/gallery/210705_NATAN_WEB-31 (1).jpg"),
        require("../../resources/gallery/Natan_11.jpg"),
        require("../../resources/gallery/STELP-Cinnema for good_9.jpg"),
        require("../../resources/gallery/Natan_14.jpg"),
        require("../../resources/gallery/Natan_27.jpg"),
        require("../../resources/gallery/Volunteers8.jpg"),
        require("../../resources/gallery/Natan_13.jpg"),
        require("../../resources/gallery/210705_NATAN_WEB-21.jpg"),
        require("../../resources/gallery/Natan_18.jpg"),
    ];

    const whiteIcon = {
        color: "white",
        backgroundColor: "var(--mainColor)",
        hoverColor: "var(--secondaryColor)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: "40px",
};

    return(<Gallery images={images}
                    infinite={true}
                    centerMode={true}
                    slidesToShow={3}
                    imageHeight={'500px'}
                    iconStyle={whiteIcon}
    />)
}

export default GallerySection