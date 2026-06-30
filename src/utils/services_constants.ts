import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faShareAlt,
  faAd,
  faCode,
  faBullhorn,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';


export const SERVICES = {
  title: 'Everything You Need to Grow Faster and Smarter',
  subtitle: 'From SEO to paid ads to AI-driven chat, each service is designed to shorten your sales cycle and increase qualified opportunities in Miami.',
  services: [
    {
      id: 'seo',
      icon: faSearch,
      title: 'SEO (Posicionamiento Orgánico)',
      description: 'Aparece en los primeros resultados de Google con una estrategia de contenido y enlaces que atrae tráfico cualificado.',
      link: '#seo',
    },
    {
      id: 'google-ads',
      icon: faAd,
      title: 'Google Ads (SEM)',
      description: 'Campañas de pago por clic optimizadas para maximizar tu ROI, con segmentación precisa y seguimiento de conversiones.',
      link: '#google-ads',
    },
    {
      id: 'social-media',
      icon: faShareAlt,
      title: 'Social Media Management',
      description: 'Gestionamos tus redes sociales con contenido estratégico, community management y campañas de influencia.',
      link: '#social-media',
    },
    {
      id: 'web-development',
      icon: faCode,
      title: 'Diseño y Desarrollo Web',
      description: 'Creamos sitios web rápidos, atractivos y optimizados para conversión, con enfoque en la experiencia de usuario.',
      link: '#web-development',
    },
    {
      id: 'content-marketing',
      icon: faBullhorn,
      title: 'Content Marketing',
      description: 'Generamos contenido de valor (blogs, videos, infografías) que educa a tu audiencia y genera confianza en tu marca.',
      link: '#content-marketing',
    },
    {
      id: 'email-marketing',
      icon: faEnvelope,
      title: 'Email Marketing',
      description: 'Campañas de email automatizadas y personalizadas para nutrir leads y fidelizar clientes.',
      link: '#email-marketing',
    },
  ],
} as const;