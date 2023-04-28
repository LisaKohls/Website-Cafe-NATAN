import  React from "react";
import "../Styles/Gallery.css"

function Gallery() {
    const images = [
        { src: './Resources/Bildschirmfoto 2023-04-28 um 12.31.48.png', alt: 'Image 1' },
        { src: './Ressources/Bildschirmfoto 2023-04-28 um 12.32.05.png', alt: 'Image 2' },
        { src: './Ressources/Bildschirmfoto 2023-04-28 um 12.32.24.png', alt: 'Image 3' },
        { src: './Ressources/Bildschirmfoto 2023-04-28 um 12.32.37.png', alt: 'Image 3' },
    ];

    return(
        <div className="gallery">
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
            ))}
        </div>
    )

}

export default Gallery;


