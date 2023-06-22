import React from 'react'
import FoodStage from "./FoodStage";
import Food1 from '../../resources/specialFoodStaging/breakfast1.jpg'
import Food2 from '../../resources/specialFoodStaging/drink2.jpg'
import Food3 from '../../resources/specialFoodStaging/sweets3.jpg'
import {description1, description2, description3, food1, food2, food3} from '../../resources/textInhalte'

function SpecialFood(){
    return(
        <div className='container'>
            <FoodStage name={food1} image={Food1} description={description1}/>
            <FoodStage name={food2} image={Food2} description={description2}/>
            <FoodStage name={food3} image={Food3} description={description3}/>
        </div>
    )
}

export default SpecialFood