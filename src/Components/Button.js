import "../Styles/Button.css";


function Button(props){

    const jumpTo = () => {
        //const anchor = document.getElementById(props.name)
        window.location.href = `#${props.name}`;
    }
    return (<button className="btn" onClick={jumpTo} >
        {props.name} </button>);
}
export default Button;