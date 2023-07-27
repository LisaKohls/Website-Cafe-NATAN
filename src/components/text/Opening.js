import "../../styles/openinghours/OpeningHours.css";

function Opening(props) {
    return (
        <div className={props.title}>
            {props.children}
        </div>)
}

export default Opening;
