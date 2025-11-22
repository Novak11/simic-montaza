import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
}

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export interface StatBoxProps {
  value: number;
  label: string;
  index: number;
}

export interface NavLink {
  href: string;
  key: string;
}
