import React from 'react';
import logo from "../../assets/img/logo.png";
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <img className='logoFooter' src={logo} alt='Logo AluraFlix' />
            <h3 className='dev'>Desarrollado por Maitén Blanc</h3>
            <h3 className='year'>2024</h3>
        </div>
    );
}

export default Footer;
