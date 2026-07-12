import React from 'react';
import { useI18n } from '../context/I18nContext';
import { motion } from 'motion/react';
import { 
  Hammer, PaintBucket, Wrench, Zap, Briefcase, 
  Ruler, Scissors, PenTool, Brush, Sprout, 
  Home, Truck, ShieldCheck, Drill
} from 'lucide-react';

const icons = [
  <Hammer className="w-6 h-6 text-blue-600" />,
  <PaintBucket className="w-6 h-6 text-amber-500" />,
  <Wrench className="w-6 h-6 text-emerald-500" />,
  <Zap className="w-6 h-6 text-yellow-500" />,
  <Briefcase className="w-6 h-6 text-slate-600" />,
  <Ruler className="w-6 h-6 text-indigo-500" />,
  <Brush className="w-6 h-6 text-pink-500" />,
  <Sprout className="w-6 h-6 text-green-500" />,
  <Home className="w-6 h-6 text-teal-500" />,
  <Drill className="w-6 h-6 text-orange-500" />
];

export const Services = () => {
  const { t } = useI18n();
  const serviceItems: string[] = t('services.items');

  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase text-slate-400 mb-2 tracking-tighter"
          >
            Our Expertise
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight"
          >
            {t('services.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {serviceItems.map((service, index) => {
            const isDark = index === serviceItems.length - 1 && serviceItems.length % 2 !== 0; // Make last item special if odd
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 12) * 0.05 }}
                className={`p-4 rounded-2xl flex flex-col justify-between ${
                  isDark ? 'col-span-2 bg-[#0F172A] text-white flex-row items-center' : 'bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow'
                }`}
              >
                {isDark ? (
                  <>
                    <div>
                      <p className="text-white text-sm font-bold">{service}</p>
                      <p className="text-slate-400 text-[10px]">Professional Services</p>
                    </div>
                    <div className="text-white opacity-40">
                      {icons[index % icons.length]}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 bg-slate-50 text-[#2563EB] rounded-lg flex items-center justify-center mb-3 shrink-0">
                      {icons[index % icons.length]}
                    </div>
                    <p className="text-xs md:text-sm font-bold text-[#0F172A] leading-tight">{service}</p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
