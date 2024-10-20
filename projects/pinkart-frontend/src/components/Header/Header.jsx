import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './Header.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Header = () => {
    return (
        <div className='header'>
            <Carousel 
                showThumbs={false} 
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                transitionTime={1000}
            >
                <div>
                    <img src={img1} alt='First slide' />
                </div>
                <div>
                    <img src={img2} alt='Second slide' />
                </div>
                <div>
                    <img src={img3} alt='Third slide' />
                </div>
            </Carousel>
        </div>
    );
}

export default Header;
