import { useRef } from "react"
import "../Styles/Button.css";


function Button(props){
    const jumpTo = () => {
        const targetPosition = 500;
        window.scrollTo({top: targetPosition, behavior: 'smooth'});
    }
    return (<button className = "btn" onClick={jumpTo} > {props.btnName} </button>);
}
export default Button;