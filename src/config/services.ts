import { Network, Server, Wifi, Shield, Mail, HardDrive } from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    title: 'Netzwerklösungen',
    description: 'Planung, Aufbau und Wartung von Netzwerken für optimale Konnektivität.',
    Icon: Network
  },
  {
    title: 'WLAN-Systeme',
    description: 'Professionelle WLAN-Installationen für flächendeckende Abdeckung.',
    Icon: Wifi
  },
  {
    title: 'Firewall & Sicherheit',
    description: 'Schutz Ihrer IT-Infrastruktur durch moderne Sicherheitslösungen.',
    Icon: Shield
  },
  {
    title: 'Server & Systeme',
    description: 'Installation und Wartung von Serversystemen und IT-Infrastruktur.',
    Icon: Server
  },
  {
    title: 'Email Services',
    description: 'Einrichtung und Verwaltung professioneller Email-Lösungen.',
    Icon: Mail
  },
  {
    title: 'NAS & Backup',
    description: 'Sichere Datenspeicherung und Backup-Lösungen für Ihr Unternehmen.',
    Icon: HardDrive
  }
];