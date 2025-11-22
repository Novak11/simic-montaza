'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { stats } from '@/lib/constants';
import StatBox from '@/components/ui/StatBox';

export default function About() {
  const { t } = useLanguage();

  const statItems = [
    { value: stats.years, label: t.about.stats.years },
    { value: stats.projects, label: t.about.stats.projects },
    { value: stats.clients, label: t.about.stats.clients },
    { value: stats.team, label: t.about.stats.team },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background grid-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label text-accent mb-4 block">{t.about.subtitle}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              {t.about.title}
            </h2>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              {t.about.description}
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              {t.about.description2}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {statItems.map((stat, index) => (
              <StatBox
                key={index}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
