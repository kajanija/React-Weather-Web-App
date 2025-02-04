import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: 600 }, // Početno stanje (nevidljivo, pomak desno)
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Ulazak
  exit: { opacity: 0, x: 600, transition: { duration: 0.3 } } // Izlazak
};

function PageWrapper({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className='sm:grid sm:grid-cols-[1fr_35%] sm:gap-5'
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;