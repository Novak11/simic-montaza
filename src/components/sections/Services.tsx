'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { serviceIcons } from '@/lib/constants';
import ServiceCard from '@/components/ui/ServiceCard';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-32 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label text-accent mb-4 block">{t.services.subtitle}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            {t.services.title}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => (
            <ServiceCard
              key={index}
              icon={serviceIcons[index]}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
