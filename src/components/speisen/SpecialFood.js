import React, {useEffect, useState} from 'react'
import FoodStage from "./FoodStage";
import Food1 from '../../resources/specialFoodStaging/breakfast1.jpg'
import Food2 from '../../resources/specialFoodStaging/drink2.jpg'
import Food3 from '../../resources/specialFoodStaging/sweets3.jpg'
import '../../styles/Food.css'
import {description1, description2, description3, food1, food2, food3} from '../../resources/textInhalte'

function SpecialFood(){
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const stage = document.querySelector('.foodstage');
        const stageTop = stage.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (stageTop < windowHeight * 1.2 && stageTop > -stage.offsetHeight ) {
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

    return(
        <div className={`foodstage${isVisible ? ' visible' : ''}`}>
            <div className='container'>
                <FoodStage name={food1} image={Food1} description={description1}/>
                <FoodStage name={food2} image={Food2} description={description2}/>
                <FoodStage name={food3} image={Food3} description={description3}/>
            </div>
        </div>
    )
}

export default SpecialFood