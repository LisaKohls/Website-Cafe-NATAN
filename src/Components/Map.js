import  React from "react";
import "../Styles/Map.css"

function Map() {

    return(
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.515921495868!2d9.177965076908187!3d48.77203997132055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db1e89eb2f99%3A0x21a4c9278b1ce694!2sNATAN%20Caf%C3%A9%20%7C%20Bar!5e0!3m2!1sde!2sde!4v1682679004050!5m2!1sde!2sde"
        style={{border: 0}} allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}

export default Map;