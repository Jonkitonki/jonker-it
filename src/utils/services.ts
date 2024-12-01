import { iconComponents } from '../config/icons';
import { services as servicesConfig } from '../config/services';
import type { Service } from '../types';

export function getServices(): Service[] {
  return servicesConfig.map(service => ({
    ...service,
    Icon: iconComponents[service.icon]
  }));
}