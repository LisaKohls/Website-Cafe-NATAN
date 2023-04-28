import '../Styles/Image.css'

function imgCenter(props){
    return(
        <img className={props.name}
            src={props.image}
        />
    )
}

export default imgCenter;