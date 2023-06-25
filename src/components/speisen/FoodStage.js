import React, {useEffect, useState} from 'react'
import '../../styles/Food.css'
import BlackFontText from '../text/BlackFontText'

function FoodStage(props){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const container = document.querySelector('.container');
            const containerTop = container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (containerTop < windowHeight * 0.75) {
                setIsVisible(true);
            }
            if (containerTop > windowHeight * 0.75) {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <div className={`container${isVisible ? ' visible' : ''}`}>
        <div className="stage">
            <div className="circle-wrapper">
                <img className="circle-image" src={props.image} alt={props.name} />
            </div>
            <div className='rectangle'>
                <BlackFontText text={props.name} formatierung='centered'/>
                <BlackFontText text={props.description} formatierung='block'/>
            </div>
        </div>
</div>
    )
}

export default FoodStage
