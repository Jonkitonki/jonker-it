import type { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}