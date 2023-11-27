import React from 'react';
// splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
// images
import slider1 from '../../imgs/sliderImgs/sliderOne.jpg';
import slider2 from '../../imgs/sliderImgs/sliderTwo.jpg';
import slider3 from '../../imgs/sliderImgs/sliderThree.jpg';
import slider4 from '../../imgs/sliderImgs/sliderFour.jpg';
import slider5 from '../../imgs/sliderImgs/sliderFive.jpg';
// styles
import './slider.scss';

const images = [slider1, slider2, slider3, slider4, slider5];

const Slider = () => {
  const options = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    padding: '1em',
    gap: '1em',
    breakpoints: {
      600: {
        perPage: 1,
      },
    },
  };
  return (
    <>
      <Splide options={options} className="splide">
        {images.map((img, index) => (
          <SplideSlide key={index} className="slide">
            <img src={img} alt="shop" className="slide_img" />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Slider;
