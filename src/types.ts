import type { LucideIcon } from 'lucide-react';

export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'text-primary' | 'text-secondary';
  bgColor: string;
}