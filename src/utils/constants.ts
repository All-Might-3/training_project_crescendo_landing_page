// utils/constants.ts
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faStar,
  faComment,
  faBriefcase,
  faBan,
  faBullseye,
  faRocket,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

export const HERO = {
  header: "Miami Growth Agency | SEO + Ads + Web",
  title: "Miami's Leading Digital Marketing Agency for Real Growth",
  subtitle:
    "Your next customers are already searching. We make sure they find you, trust you, and contact you first with a strategy engineered for revenue, not vanity metrics.",
  stats: [
    { icon: faStar, text: '4.9/5 Google Rating' },
    { icon: faComment, text: '50+ Verified Reviews' },
    { icon: faBriefcase, text: '50+ Businesses Served' },
    { icon: faBan, text: 'No Long-Term Contracts' },
  ],
  buttons: [
    { 
      text: 'Claim My Free Growth Blueprint', 
      href: '#contacto',
      variant: 'primary'
    },
    { 
      text: 'See How We Scale Brands', 
      href: '#servicios',
      variant: 'secondary' 
    },
  ],
  top_boxes: [
    {
      image: '/src/assets/images/teamwork.png', 
      label: 'Weekly Strategy Sessions',
    },
    {
      image: '/src/assets/images/googleads.png',
      label: 'Paid Ads Optimization',
    },
    {
      image: '/src/assets/images/localseo.png',
      label: 'Local SEO Growth',
    },
  ],
  middle_boxes: [
  { type: 'icon', icon: faBullseye,  text: 'Strategic roadmap aligned to your monthly revenue target' },
  { type: 'icon', icon: faRocket,   text: 'Weekly optimization focused on lower cost per qualified lead' },
  { type: 'icon', icon: faChartLine,   text: 'Fast response team that feels like your in-house marketing department' },
  {
    type: 'text',
    title: 'Your 30-Minute Free Audit Includes',
    items: [
      'Competitor gap analysis in your local market',
      'Conversion leaks detected across ads and website',
      '90-day action plan with priority wins',
    ],
    link: { text: 'Book the audit now', href: '#' },
  },
],
  bottom_boxes: [
    {
      image: '/src/assets/images/caso1.png',
      title: 'Weekly Strategy Sessions',
      subtitle: '+42% Qualified Leads',
    },
    {
      image: '/src/assets/images/caso3.png',
      title: 'Paid Ads Optimization',
      subtitle: 'ROI +30%',
    },
    {
      image: '/src/assets/images/caso5.png',
      title: 'Local SEO Growth',
      subtitle: 'Organic Traffic Boost',
    },
  ],
} as const;