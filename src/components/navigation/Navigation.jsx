import React from 'react';
// router
import { NavLink } from 'react-router-dom';
// styles
import './navigation.css';
// framer
import { AnimatePresence, motion } from 'framer-motion';
// animations
import { header, container, item } from '../../animations';

const Navigation = ({ nav, toggleNav }) => {
  const toggleHeader = () => {
    toggleNav(!nav);
  };

  return (
    <AnimatePresence>
      {nav && (
        <motion.header
          variants={header}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.nav
            variants={container}
            initial="hidden"
            animate="animate"
            exit="hidden"
          >
            <div className="link_container">
              <motion.div variants={item}>
                <NavLink to="/apothecary" onClick={toggleHeader}>
                  Apothecary
                </NavLink>
              </motion.div>
            </div>
            <div className="link_container">
              <motion.div variants={item}>
                <NavLink to="/about" onClick={toggleHeader}>
                  the Shop
                </NavLink>
              </motion.div>
            </div>
            <div className="link_container">
              <motion.div variants={item}>
                <NavLink to="/contact" onClick={toggleHeader}>
                  Reach Out
                </NavLink>
              </motion.div>
            </div>
            <div className="link_container">
              <motion.div variants={item}>
                <NavLink to="/">Vendor</NavLink>
              </motion.div>
            </div>
          </motion.nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
