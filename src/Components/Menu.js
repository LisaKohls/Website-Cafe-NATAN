import  React from "react";
import "../Styles/Menu.css"
import MenuCard from '../Resources/Menu.png'


function Menu() {

    return(
        <div className="menu">
            <img src={MenuCard}  width="40%" height="auto"/>
        </div>
    )
}

export default Menu;