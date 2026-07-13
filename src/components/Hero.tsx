import React from 'react';
import { useI18n } from '../context/I18nContext';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import heroImage from '../../assets/0.png';

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section id="home" className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <span className="text-[#2563EB] font-semibold text-xs uppercase tracking-widest">{t('hero.subtitle').split('.')[0] || "Professional Handyman"}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-lg text-[#0F172A]">
              {t('hero.title')}
            </h1>
            <p className="text-slate-500 max-w-md leading-relaxed text-lg">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+420123456789"
                className="w-full sm:w-auto px-6 py-3 bg-[#2563EB] text-white rounded-xl font-semibold shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t('hero.call_now')}</span>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/420123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 border border-slate-200 bg-white text-slate-700 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-slate-50"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('hero.whatsapp')}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
              <img 
                src={heroImage}
                alt="Handyman person working" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#2563EB]/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
