import React from 'react';
// transition
import transition from '../../transition';
// icons
// icons
import { TiSocialInstagram } from 'react-icons/ti';
import { IoLogoYoutube } from 'react-icons/io';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { Link } from 'react-router-dom';
// styles
import './contact.scss';
// framer
import { AnimatePresence, motion } from 'framer-motion';
// animations
import { item, container } from '../../animations';

const ContactPage = () => {
  return (
    <AnimatePresence>
      <motion.main
        className="contact_container grid"
        variants={container}
        initial="hidden"
        animate="animate"
        exit="exit"
      >
        <div className="hamburger_container"></div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Keep In Touch
        </motion.h2>
        <div className="col_one"></div>
        <div className="icons_container grid">
          <div className="hidden_container">
            <motion.div variants={item}>
              <Link to="#" className="link">
                <IoMdMail />
              </Link>
            </motion.div>
          </div>

          <div className="hidden_container">
            <motion.div variants={item}>
              <Link to="#" className="link">
                <TiSocialInstagram />
              </Link>
            </motion.div>
          </div>

          <div className="hidden_container">
            <motion.div variants={item}>
              <Link to="#" className="link">
                <IoLogoYoutube />
              </Link>
            </motion.div>
          </div>

          <div className="hidden_container">
            <motion.div variants={item}>
              <Link to="#" className="link">
                <FaFacebookSquare />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="col_two"></div>
      </motion.main>
    </AnimatePresence>
  );
};

export default transition(ContactPage);
