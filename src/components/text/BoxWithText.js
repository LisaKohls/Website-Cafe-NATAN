import "../../styles/openinghours/OpeningHours.css";

function BoxWithText(props) {
    return (
        <div className={props.title}>
            {props.children}
        </div>)
}

export default BoxWithText;