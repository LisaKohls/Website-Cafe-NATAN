import '../Styles/Wheel.css'
import {useRef, useEffect} from "react";

function Wheel(props){
    const teschd = useRef(null)

    useEffect(() => {
        const rotate =  (event) => {
            if (teschd && teschd.current) {
                teschd.current.style.transform = `rotate(${window.scrollY/3}deg)`
            }
        }
        document.addEventListener("scroll", rotate )

        return () => {
            document.removeEventListener("scroll", rotate)
        }
    }, [])

    return(
        <img alt="trans" ref={teschd} className='wheel'
             src={props.image}
        />
    )
}

export default Wheel;