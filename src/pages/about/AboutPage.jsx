import React from 'react';
// styles
import './about.scss';
// transition
import transition from '../../transition';
// components
import Slider from '../../components/splideSlider/Slider';

const AboutPage = () => {
  return (
    <main
      className="about_container grid"
      // initial={{ y: '100%' }}
      // animate={{ y: '0%' }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="left_col flex_col">
        <h2>About Page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          laudantium doloribus, ipsum rem ut esse maiores similique recusandae
          beatae nemo sapiente, quam dicta dolore! Maiores.
        </p>
      </div>
      <div className="box one"></div>
      <div className="box two"></div>
      <div className="right_col">
        <Slider />
      </div>
    </main>
  );
};

export default transition(AboutPage);
