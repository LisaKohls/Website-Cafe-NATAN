import '../../styles/Food.css'
import BlackFontText from '../text/BlackFontText'



function FoodStage(props) {


        return (
            <div className='stage'>
                <div className="circle-wrapper">
                    <img className="circle-image" src={props.image} alt={props.name}/>
                </div>
                <div className="rectangle">
                    <BlackFontText text={props.name} formatierung="centered bold"/>
                    <BlackFontText text={props.description} formatierung="blockSmall"/>
                </div>
            </div>
        );
}
    export default FoodStage
