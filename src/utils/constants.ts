export const COMPANY_INFO = {
  name: 'Jonker IT',
  phone: '+49 65949216136',
  email: 'info@jonker-it.de',
  address: {
    street: 'Meisburger Str. 16a',
    city: 'Densborn',
    zip: '54570'
  }
} as const;

export const ROUTES = {
  HOME: '/',
  CONTACT: '/contact',
  IMPRESSUM: '/impressum',
  DATENSCHUTZ: '/datenschutz'
} as const;