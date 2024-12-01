import type { LucideIcon } from 'lucide-react';

export interface ServiceConfig {
  title: string;
  description: string;
  icon: keyof typeof import('../config/icons').iconComponents;
}

export interface Service extends ServiceConfig {
  Icon: LucideIcon;
}