import "../Styles/Oeffnungszeiten.css";

function Oeffnungszeiten(props){
    return(<div className="opening">
        <p>Öffnungszeiten</p>
        <p>{props.inhalt}</p>
    </div>)
}

export default Oeffnungszeiten;