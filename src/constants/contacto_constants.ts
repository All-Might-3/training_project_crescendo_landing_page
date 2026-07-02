// src/utils/contacto_constants.ts
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faGoogle,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export const CONTACTO = {
  info: {
    title: 'Contact Information',
    items: [
      {
        icon: faPhone,
        title: 'Phone',
        value: '(786) 755-6238',
        link: 'tel:+17867556238',
      },
      {
        icon: faEnvelope,
        title: 'Email',
        value: 'crescendomarketingdigital@gmail.com',
        link: 'mailto:crescendomarketingdigital@gmail.com',
      },
      {
        icon: faMapMarkerAlt,
        title: 'Location',
        value: 'Miami, Florida',
        link: null,
      },
      {
        icon: faClock,
        title: 'Hours',
        value: 'Monday to Friday: 9am - 5pm EST',
        link: null,
      },
    ],
    social: [
      {
        icon: faFacebook,
        link: 'https://www.facebook.com/share/17KZQQkbay/?mibextid=wwXIfr',
        bg: '#1877F2',
      },
      {
        icon: faInstagram,
        link: 'https://www.instagram.com/crescendodigitalagency?igsh=azZ3cmJxcG1oYWE%3D&utm_source=qr',
        bg: 'linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)',
      },
      {
        icon: faGoogle,
        link: 'https://share.google/8QfBsfnQEEgWiNsAB',
        bg: '#4285F4',
      },
      {
        icon: faWhatsapp,
        link: 'https://wa.me/17867556238',
        bg: '#25D366',
      },
    ],
  },
} as const;