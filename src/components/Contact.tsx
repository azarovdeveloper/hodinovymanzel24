import React from 'react';
import { useI18n } from '../context/I18nContext';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, MessageCircle, Send } from 'lucide-react';

// Custom Viber Icon using generic SVG since lucide doesn't have it
const ViberIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
    <path d="M436.4 286c-5.8-14.7-22.1-23.9-46.7-25.9-20.9-1.7-41.2 5.9-56.1 21.2l-14.6 15c-35-15.6-67-42.3-91.8-76l14.2-13.8c14.2-13.8 21.2-32.9 19.3-52.7-2.3-23.4-12.7-38.6-29.2-43.1-13.8-3.8-29.6-1.5-43.1 6.5l-26.6 15.8c-23.1 13.8-38.9 38.6-38.9 66.5 0 83.1 67.4 179.8 174.4 220.2 16.2 6.1 33.9 9.2 52 9.2 46.2 0 88.6-24.3 111.7-64l11.5-19.6c8.5-14.7 7.7-32.7-1.1-46.1l-35-53.1z"/>
  </svg>
);

export const Contact = () => {
  const { t } = useI18n();

  return (
    <section id="contacts" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2"
          >
            Reach Out
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight"
          >
            {t('contact.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Phone */}
          <motion.a 
            href="tel:+420123456789"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-start group"
          >
            <div className="w-10 h-10 bg-blue-50 group-hover:bg-[#2563EB] rounded-lg flex items-center justify-center mb-4 transition-colors">
              <Phone className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1">{t('contact.phone')}</h3>
            <p className="text-slate-500 text-xs">+420 123 456 789</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a 
            href="https://wa.me/420123456789"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-start group"
          >
            <div className="w-10 h-10 bg-green-50 group-hover:bg-green-500 rounded-lg flex items-center justify-center mb-4 transition-colors">
              <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1">{t('contact.whatsapp')}</h3>
            <p className="text-slate-500 text-xs">+420 123 456 789</p>
          </motion.a>

          {/* Telegram */}
          <motion.a 
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-start group"
          >
            <div className="w-10 h-10 bg-sky-50 group-hover:bg-sky-500 rounded-lg flex items-center justify-center mb-4 transition-colors">
              <Send className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1">{t('contact.telegram')}</h3>
            <p className="text-slate-500 text-xs">@username</p>
          </motion.a>

          {/* Viber */}
          <motion.a 
            href="viber://chat?number=%2B420123456789"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-start group"
          >
            <div className="w-10 h-10 bg-purple-50 group-hover:bg-purple-600 rounded-lg flex items-center justify-center mb-4 transition-colors">
              <ViberIcon className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1">{t('contact.viber')}</h3>
            <p className="text-slate-500 text-xs">+420 123 456 789</p>
          </motion.a>

          {/* Email */}
          <motion.a 
            href="mailto:info@example.com"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-start group"
          >
            <div className="w-10 h-10 bg-rose-50 group-hover:bg-rose-500 rounded-lg flex items-center justify-center mb-4 transition-colors">
              <Mail className="w-5 h-5 text-rose-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1">{t('contact.email')}</h3>
            <p className="text-slate-500 text-xs">info@example.com</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
