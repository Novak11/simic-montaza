'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { navLinks, contactInfo } from '@/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background-alt border-t border-steel-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              SIMIĆ<span className="text-accent">.</span>
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              {t.hero.subtitle}
            </p>
            <p className="text-text-muted text-xs">
              {t.footer.pib}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              {t.nav.services}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              {t.contact.title}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-secondary text-sm">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-sm">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-sm">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${contactInfo.phone1}`} className="hover:text-accent transition-colors">
                    {contactInfo.phone1}
                  </a>
                  <a href={`tel:${contactInfo.phone2}`} className="hover:text-accent transition-colors">
                    {contactInfo.phone2}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-steel-border text-center">
          <p className="text-text-muted text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
