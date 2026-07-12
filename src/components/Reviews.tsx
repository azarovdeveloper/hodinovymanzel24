import React from 'react';
import { useI18n } from '../context/I18nContext';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const Reviews = () => {
  const { t } = useI18n();
  const reviews: {name: string, text: string}[] = t('reviews.items');

  return (
    <section id="reviews" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2"
          >
            Testimonials
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight"
          >
            {t('reviews.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-amber-50 border border-amber-100 rounded-2xl relative"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-amber-200/50 rotate-180" />
              <p className="text-sm italic text-slate-700 mb-6 leading-relaxed relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-500">
                  {review.name.charAt(0)}
                </div>
                <p className="text-xs font-bold text-[#0F172A]">
                  {review.name} <span className="text-amber-500 ml-1">★★★★★</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
