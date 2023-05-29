import React from 'react'
import '../../Styles/Food.css'
import Text from '../Text'

function FoodStage(props){
    return(
        <div className="stage">
            <div className="circle-wrapper">
                <img className="circle-image" src={props.image} alt={props.name} />
            </div>
            <div className='rectangle'>
                <Text text={props.name} formatierung='mittigSchwarz'/>
                <Text text={props.description} formatierung='blocksatzSchwarz'/>
            </div>
        </div>

    )
}

export default FoodStage
