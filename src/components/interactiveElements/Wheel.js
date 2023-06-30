import {useRef, useEffect} from "react";
import '../../styles/Wheel.css'
import wheel from '../../resources/logos/Kreis.svg'

function Wheel(){
    const ref = useRef(null)

    useEffect(() => {
        const rotate =  () => {
            if (ref && ref.current) {
                ref.current.style.transform = `rotate(${window.scrollY/7}deg)`
            }
        }
        document.addEventListener("scroll", rotate )

        return () => {
            document.removeEventListener("scroll", rotate)
        }
    }, [])

    return(
        <img alt="wheel" ref={ref} className='wheel'
             src={wheel}
        />
    )
}

export default Wheel;