import React, {useEffect, useState} from 'react'
import '../../styles/foodanddrinks/Food.css'
function OnScrollAnimation(props){
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const elem = document.querySelector(`.${props.element}`);
        const elemTop = elem.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elemTop < windowHeight * 1.2 && elemTop > -elem.offsetHeight ) {
            setIsVisible(true);
            console.log(`visibility chenged to true: ${isVisible}`)

        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        console.log(`visibility changed to: ${isVisible}`)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll,isVisible]);
    console.log(`css selektor: ${props.element}${isVisible ? ' visible' : ''} style: ${isVisible ? "added animation" : {}}`)
    return(
        <div className={`${props.element}${isVisible ? ' visible' : ''}`}>
            {props.children}
        </div>
    )
}

export default OnScrollAnimation