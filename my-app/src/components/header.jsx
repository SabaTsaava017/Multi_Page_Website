import React from 'react'
import './styles/header.css'



export const Header = () => {
    return(
        <header>
            <div className = "designo_and_logo">
                <img src={require("../imiges/Oval.png")} className = "logo" />
                <h1 className = "DESIGNO">DESIGNO</h1>
            </div>
            
            <ul>
                <li className = "our_company">
                    OUR COMPANY
                </li>
                <li className = "location">
                    LOCATION
                </li>
                <li className = "contact">
                    CONTACT
                </li>
            </ul>
        </header>
    );
};

export default Header;