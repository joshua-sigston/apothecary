import { useState } from 'react';
import './App.css';
// router
// import { Routes, Route, useLocation } from 'react-router-dom';
// // components
// import Navigation from './components/navigation/Navigation';
// import Hamburger from './components/hamburger/Hamburger';
// // framer
// import { AnimatePresence } from 'framer-motion';
// // pages
// import { HomePage, AboutPage, ContactPage } from './pages/index';

function App() {
  // const location = useLocation();
  // const [nav, setNav] = useState(false);

  // const toggleNav = () => {
  //   setNav(!nav);
  // };

  return (
    <>
      <h1>Test</h1>
      {/* <Navigation nav={nav} toggleNav={toggleNav} />
      <Hamburger nav={nav} toggleNav={toggleNav} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage nav={nav} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence> */}
    </>
  );
}

export default App;
