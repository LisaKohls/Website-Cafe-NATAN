import React from 'react'
import FoodStage from "./FoodStage";
import Food1 from '../../Resources/specialFoodStaging/breakfast1.jpg'
import Food2 from '../../Resources/specialFoodStaging/drink2.jpg'
import Food3 from '../../Resources/specialFoodStaging/sweets3.jpg'

function SpecialFood(){
    return(
        <div className='container'>
            <FoodStage name='Healthy Breakfast' img={Food1}/>
            <FoodStage name='Refreshing drinks' img={Food2}/>
            <FoodStage name='Sweets' img={Food3}/>
        </div>

    )
}

export default SpecialFood