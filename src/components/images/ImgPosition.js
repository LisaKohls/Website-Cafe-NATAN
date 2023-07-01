import '../../styles/images/Image.css'


function ImgPosition(props) {

    return (
        <img alt="trans" className={"image" + props.name}
             src={props.image}
        />
    )
}

export default ImgPosition;