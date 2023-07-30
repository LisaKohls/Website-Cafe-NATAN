import '../../styles/foodanddrinks/Food.css'
import Text from '../text/Text'

function FoodStage(props) {
    return (
        <div className='stage'>
            <div className="circle-wrapper">
                <img className="circle-image" src={props.image} alt={props.name}/>
            </div>
            <div className="rectangle">
                <Text text={props.name} formatierung="centered bold" color='black'/>
                <Text text={props.description} formatierung="blockSmall" color='black'/>
            </div>
        </div>
    );
}

export default FoodStage;
