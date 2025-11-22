'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { contactInfo } from '@/lib/constants';
import { Input, Textarea } from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Required';
    }
    if (!formState.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create mailto link with form data
    const subject = encodeURIComponent(`Kontakt sa sajta - ${formState.name}`);
    const body = encodeURIComponent(
      `Ime: ${formState.name}\nEmail: ${formState.email}\nTelefon: ${formState.phone || 'N/A'}\n\nPoruka:\n${formState.message}`
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background grid-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label text-accent mb-4 block">{t.contact.subtitle}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            {t.contact.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label={t.contact.form.name}
                value={formState.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder={t.contact.form.name}
                error={errors.name}
                disabled={isSubmitting}
              />
              <Input
                type="email"
                label={t.contact.form.email}
                value={formState.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder={t.contact.form.email}
                error={errors.email}
                disabled={isSubmitting}
              />
              <Input
                type="tel"
                label={t.contact.form.phone}
                value={formState.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder={t.contact.form.phone}
                disabled={isSubmitting}
              />
              <Textarea
                label={t.contact.form.message}
                value={formState.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder={t.contact.form.message}
                rows={5}
                error={errors.message}
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    {t.contact.form.success}
                  </span>
                ) : isSubmitting ? (
                  t.contact.form.sending
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={20} />
                    {t.contact.form.submit}
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">
                  {t.contact.info.address}
                </h4>
                <p className="text-text-secondary">
                  {t.contact.info.addressValue}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">
                  {t.contact.info.email}
                </h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  {t.contact.info.emailValue}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">
                  {t.contact.info.phone}
                </h4>
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${contactInfo.phone1}`}
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    {t.contact.info.phoneValue1}
                  </a>
                  <a
                    href={`tel:${contactInfo.phone2}`}
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    {t.contact.info.phoneValue2}
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 rounded-lg overflow-hidden border border-steel-border">
              <div className="aspect-video bg-surface flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-text-secondary">Nova Pazova, Serbia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
