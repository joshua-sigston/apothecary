import React, { useState } from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { FaFacebookSquare } from 'react-icons/fa';
// styles
import './homepage.scss';
// components
import Hamburger from '../../components/hamburger/Hamburger';
// img
import homeImg1 from '../../imgs/pexels-victoria-emerson-6037890.jpg';
import homeImg2 from '../../imgs/pexels-monstera-production-6621335.jpg';
// framer
import { motion, AnimatePresence } from 'framer-motion';
// animations
import { item, container } from '../../animations';
// transition
import transition from '../../transition';

const HomePage = () => {
  return (
    <AnimatePresence>
      <motion.main
        className="homepage grid"
        variants={container}
        initial="hidden"
        animate="animate"
        exit="exit"
      >
        <div className="left_col flex_col">
          <div className="hidden_container">
            <motion.h2 variants={item}>Mielea Apothecary</motion.h2>
          </div>
        </div>
        <div className="homeImg1">
          <img src={homeImg1} alt="hero img" />
        </div>
        <div className="right_col flex_col"></div>
        <div className="icons_container flex_col">
          <div className="hidden_container">
            <motion.div variants={item}>
              <FaInstagramSquare className="link" />
            </motion.div>
          </div>
          <div className="hidden_container">
            <motion.div variants={item}>
              <IoLogoYoutube className="link" />
            </motion.div>
          </div>
          <div className="hidden_container">
            <motion.div variants={item}>
              <FaFacebookSquare className="link" />
            </motion.div>
          </div>
        </div>
        <div className="homeImg2">
          <img src={homeImg2} alt="soap" />
        </div>
        <div className="caption">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </motion.main>
    </AnimatePresence>
  );
};

export default transition(HomePage);
