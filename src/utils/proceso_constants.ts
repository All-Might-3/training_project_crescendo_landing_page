// src/utils/proceso_constants.ts
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const PROCESO = {
  title: 'How It Works',
  subtitle: 'Three steps from your first call to a calendar full of new clients',
  steps: [
    {
      number: '01',
      title: 'We Find Your Gaps (Free)',
      description:
        'We analyze your full digital presence in a 30-minute call and hand you a clear, actionable roadmap — at no cost.',
      link: '#contacto',
      linkText: 'Schedule now',
      linkIcon: faPhone,
    },
    {
      number: '02',
      title: 'We Build Your Growth Engine',
      description:
        'We design and launch your complete strategy — website, campaigns, SEO — all aligned to your specific business goals.',
      link: null,
    },
    {
      number: '03',
      title: 'More Calls, More Revenue',
      description:
        'Watch your calendar fill up. We continuously optimize based on real data so your results compound over time.',
      link: null,
    },
    
  ],
} as const;