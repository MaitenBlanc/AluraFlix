import React from 'react';
import banner from '../../assets/img/banner(1).png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <img className='imgBanner' src={banner} alt='Banner Música'></img>
        </div>
    );
}

export default Banner;
