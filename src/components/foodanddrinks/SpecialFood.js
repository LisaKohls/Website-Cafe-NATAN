import React, {useEffect, useState} from 'react'
import '../../styles/foodanddrinks/Food.css'

function SpecialFood(props){
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const stage = document.querySelector('.foodstage');
        const stageTop = stage.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (stageTop < windowHeight * 1.2 && stageTop > -stage.offsetHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);

        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`foodstage${isVisible ? ' visible' : ''}`}>
            <div className='container'>
                {props.children}
            </div>
        </div>
    )
}

export default SpecialFood