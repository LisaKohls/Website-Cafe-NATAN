import '../../styles/images/Image.css'


function ImgPosition(props) {
    //this component is used to position the images in a specific place by passing the image and css selector
    return (
        <img alt="trans" className={"image" + props.name}
             src={props.image}
        />
    )
}

export default ImgPosition;