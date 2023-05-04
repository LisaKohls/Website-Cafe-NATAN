import {useRef, useEffect} from "react";
import '../Styles/Wheel.css'
import wheel from '../Resources/Kreis.svg'


function Wheel(){
    const teschd = useRef(null)

    useEffect(() => {
        const rotate =  (event) => {
            if (teschd && teschd.current) {
                teschd.current.style.transform = `rotate(${window.scrollY/10}deg)`
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