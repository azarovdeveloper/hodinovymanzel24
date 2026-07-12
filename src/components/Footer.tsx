import React from 'react';
import { useI18n } from '../context/I18nContext';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export const Footer = () => {
  const { t, lang, setLang } = useI18n();
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'cz', label: 'Čeština' },
    { code: 'ru', label: 'Русский' },
    { code: 'ua', label: 'Українська' }
  ];

  return (
    <footer className="py-12 md:h-24 md:py-0 px-4 sm:px-6 lg:px-8 bg-[#0F172A] flex flex-col md:flex-row items-center justify-between shrink-0 gap-6">
      <div className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={scrollTop}>
          <span className="text-xl font-bold tracking-tighter text-white">
            Profesionální <span className="text-[#2563EB]">Hodinový</span> Manžel
          </span>
        </div>
        
        <div className="hidden md:block h-6 w-px bg-white/10"></div>

        {/* Links */}
        <div className="flex gap-4 text-xs">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.privacy')}</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.terms')}</a>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full md:w-auto">
        <div className="text-center md:text-right">
          <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Area</p>
          <p className="text-xs text-white">Prague & Surroundings</p>
        </div>
        <div className="hidden md:block h-8 w-px bg-white/10"></div>
        <div className="text-center md:text-right">
          <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Open Hours</p>
          <p className="text-xs text-white">08:00 – 20:00 (Daily)</p>
        </div>
        <div className="hidden md:block h-8 w-px bg-white/10"></div>
        <div className="text-center md:text-right">
           <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Copyright</p>
           <p className="text-xs text-white">{t('footer.copyright')}</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollTop}
            className="fixed bottom-8 right-8 bg-[#2563EB] hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
