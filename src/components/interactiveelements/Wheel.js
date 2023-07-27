import {useEffect, useRef} from "react";
import '../../styles/interactiveelements/Wheel.css'

//this component is responsible for turning wheels depending on the scroll of the user
function Wheel(props) {
    const ref = useRef(null)

    useEffect(() => {
        const rotate = () => {
            if (ref && ref.current) {
                ref.current.style.transform = `rotate(${window.scrollY / 7}deg)`
            }
        }
        document.addEventListener("scroll", rotate)

        return () => {
            document.removeEventListener("scroll", rotate)
        }
    }, [])

    return (
        <img alt="wheel" ref={ref} className={props.title}
             src={props.wheel}
        />
    )
}

export default Wheel;