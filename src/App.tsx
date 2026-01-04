import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Blogs from './pages/Blogs';
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();

  const pageTransition = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};
  return (
  <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Home />
    </motion.div>} />
      <Route path="/details" element={<motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
     <Details />
    </motion.div>} />
      <Route path="/blogs" element={<motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Blogs />
    </motion.div>} />
    </Routes>
  </AnimatePresence>
  )
}

export default App
