import "../Styles/Button.css";


function Button(props){

    const jumpTo = () => {
        const anchor = document.getElementById(props.name)
        window.scrollTo({top: anchor, behavior: 'smooth'});
    }
    return (<button className="btn" onClick={jumpTo}  > {props.name} </button>);
}
export default Button;