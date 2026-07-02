//services_constants.ts
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faMapPin,
  faBullseye,
  faLaptop,
  faShareNodes,
  faStar,
  faComments,
} from '@fortawesome/free-solid-svg-icons';

export const SERVICES = {
  title: 'Everything You Need to Grow Faster and Smarter',
  secondary_text: 'From SEO to paid ads to AI-driven chat, each service is designed to shorten your sales cycle and increase qualified opportunities in Miami.',
  services: [
    // 1. Local SEO
    {
      id: 'local-seo',
      icon: faMapPin,
      gradient: 'linear-gradient(135deg, #1b8a8a, #187777)',
      title: 'Local SEO',
      subtitle:
        'Dominate search results in Miami and beyond. We\'ll position your business in front of potential customers when they need you most.',
      features: [
        'Optimización de Google Business Profile',
        'Strategic local keywords',
        'Complete technical SEO audit',
        'Local link building',
      ],
      link: '#local-seo',
      linkText: 'Learn about Local SEO',
    },

    // 2. Google Ads & Meta Ads
    {
      id: 'google-meta-ads',
      icon: faBullseye,
      gradient: 'linear-gradient(135deg, #f5b82a, #e5a915)',
      title: 'Google Ads & Meta Ads',
      subtitle:
        'Stop burning budget on clicks that don\'t convert. We run data-driven campaigns that bring buyers — not just browsers — to your business.',
      features: [
        'High-performance search campaigns',
        'Targeted social media advertising',
        'Landing page optimization',
        'Detailed ROI reports',
      ],
      link: '#google-meta-ads',
      linkText: 'Learn about Google Ads and Meta Ads',
    },

    // 3. Professional Web Design
    {
      id: 'web-design',
      icon: faLaptop,
      gradient: 'linear-gradient(135deg, #ff7a3d, #ff5a1f)',
      title: 'Professional Web Design',
      subtitle:
        'We create modern, fast, conversion-focused websites that work as your best salesperson, 24/7.',
      features: [
        'Responsive, mobile-first design',
        'Speed optimization',
        'CRM and analytics integration',
        'Built-in on-page SEO',
      ],
      link: '#web-design',
      linkText: 'Learn about Professional Web Design',
    },

    // 4. AI Chat 24/7
    {
      id: 'ai-chat',
      icon: faComments, 
      gradient: 'linear-gradient(135deg, #4f7cff, #335de0)',
      title: 'AI Chat 24/7',
      subtitle:
        'Stop losing leads at 2am. Our AI answers questions, qualifies prospects, and books appointments — while you sleep.',
      features: [
        'Advanced AI chatbot',
        'Automatic lead qualification',
        'Integrated appointment scheduling',
        'Available 24/7 in multiple languages',
      ],
      link: '#ai-chat',
      linkText: 'Learn about AI Chat 24/7',
    },

    // 5. Social Media Marketing
    {
      id: 'social-media',
      icon: faShareNodes,
      gradient: 'linear-gradient(135deg, #9f7aea, #805ad5)',
      title: 'Social Media Marketing',
      subtitle:
        'Build a loyal community around your brand with content strategies that generate engagement and sales.',
      features: [
        'Personalized content strategy',
        'Active community management',
        'Scheduled posts and analytics',
        'Influencer partnerships',
      ],
      link: '#social-media',
      linkText: 'Learn about Social Media Marketing',
    },

    // 6. Online Reputation Management
    {
      id: 'reputation-management',
      icon: faStar,
      gradient: 'linear-gradient(135deg, #0f766e, #0b5f59)',
      title: 'Online Reputation Management',
      subtitle:
        'Drive positive reviews and manage your reputation to build trust that inspires more customers.',
      features: [
        'Generate positive reviews',
        'Online mentions monitoring',
        'Negative comment response',
        'Increase your trust score',
      ],
      link: '#reputation-management',
      linkText: 'Learn about Online Reputation Management',
    },
  ],
} as const;