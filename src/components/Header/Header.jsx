import React from "react";
import logo from "../../assets/img/logo.png";
import './Header.css';

export const Header = () => {
    return (
        <div className="header">
            <a href="../../App.js"><img className="imgHeader" src={logo} alt="Logo AluraFlix" /></a>
            <button className="buttonHeader">Nuevo video</button>
        </div>
    )
}