import '../Styles/Image.css'


function ImgCenter(props){

    return(
        <img alt="trans"  className={props.name}
            src={props.image}
        />
    )
}

export default ImgCenter;