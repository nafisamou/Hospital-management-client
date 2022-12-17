import React, { useState } from 'react';
import slider from '../../helper/slider.json';
import './Carousel2.css'
const Carousel2 = () => {
    const [currImg, setCurrImg] = useState(1)
    return (
        <div className='carousel'>
            <div className='carouselInner' style={{backgroundImage:`url(${slider[3].img})`}}>
{/* <img src={slider[3].img} alt="" /> */}
            </div>
        </div>
    );
};

export default Carousel2;