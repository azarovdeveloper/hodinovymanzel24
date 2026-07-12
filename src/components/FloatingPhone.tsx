import React from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingPhone = () => {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      // Hide if at the very top (Hero section has its own big buttons)
      if (window.scrollY < 400) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+420123456789"
          className="md:hidden fixed bottom-8 left-8 bg-[#2563EB] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center border-4 border-white"
        >
          <Phone className="w-6 h-6" />
          {/* Ripple effect */}
          <span className="absolute w-full h-full rounded-full bg-[#2563EB] animate-ping opacity-75 -z-10"></span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};
