import '../../styles/images/WheelImg.css'


function WheelImg(props){

    return(
        <img alt="trans" className={props.name}
             src={props.image}
        />
    )
}

export default WheelImg;