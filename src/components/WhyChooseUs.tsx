import React from 'react';
import { useI18n } from '../context/I18nContext';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const WhyChooseUs = () => {
  const { t } = useI18n();
  const items: string[] = t('why_us.items');

  return (
    <section id="why_us" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-square md:aspect-auto md:h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Handyman person working" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2"
            >
              Why Us?
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-8 tracking-tight"
            >
              {t('why_us.title')}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
                >
                  <div className="text-green-500 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F172A]">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
