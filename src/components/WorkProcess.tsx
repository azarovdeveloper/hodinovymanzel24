import React from 'react';
import { useI18n } from '../context/I18nContext';
import { motion } from 'motion/react';
import { MessageSquare, Calculator, Hammer, PartyPopper } from 'lucide-react';

export const WorkProcess = () => {
  const { t } = useI18n();
  const steps: {title: string, desc: string}[] = t('process.steps');
  
  const icons = [
    <MessageSquare className="w-8 h-8 text-blue-600" />,
    <Calculator className="w-8 h-8 text-blue-600" />,
    <Hammer className="w-8 h-8 text-blue-600" />,
    <PartyPopper className="w-8 h-8 text-blue-600" />
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2"
          >
            Our Process
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight"
          >
            {t('process.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className={`w-8 h-8 rounded-full ${index === 0 ? 'bg-blue-100 text-[#2563EB]' : 'bg-slate-100 text-slate-500'} text-xs font-bold flex items-center justify-center shrink-0`}>
                {index + 1}
              </div>
              <div>
                <p className="text-sm font-bold text-[#0F172A] mb-1">{step.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
