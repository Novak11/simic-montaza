'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { whyUsIcons } from '@/lib/constants';

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-20 md:py-32 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label text-accent mb-4 block">{t.whyUs.subtitle}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            {t.whyUs.title}
          </h2>
        </motion.div>

        {/* Why Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.whyUs.items.map((item, index) => {
            const Icon = whyUsIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-surface rounded-lg p-8 border border-steel-border
                           hover:border-secondary/50 transition-all duration-300
                           hover:shadow-[0_0_30px_rgba(0,168,232,0.1)]"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center
                                  group-hover:bg-secondary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
