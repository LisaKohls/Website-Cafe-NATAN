import {useRef, useEffect} from "react";
import '../styles/Wheel.css'
import wheel from '../resources/Kreis.svg'

function Wheel(){
    const teschd = useRef(null)

    useEffect(() => {
        const rotate =  () => {
            if (teschd && teschd.current) {
                teschd.current.style.transform = `rotate(${window.scrollY/7}deg)`
            }
        }
        document.addEventListener("scroll", rotate )

        return () => {
            document.removeEventListener("scroll", rotate)
        }
    }, [])

    return(
        <img alt="wheel" ref={teschd} className='wheel'
             src={wheel}
        />
    )
}

export default Wheel;