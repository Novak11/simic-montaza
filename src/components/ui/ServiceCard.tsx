'use client';

import { motion } from 'framer-motion';
import type { ServiceCardProps } from '@/types';

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface rounded-lg p-6 industrial-border
                 hover:bg-surface-hover transition-all duration-300
                 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center
                        group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
