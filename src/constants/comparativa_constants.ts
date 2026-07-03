// src/utils/comparativa_constants.ts

import {
  faShieldHalved,
  faChartLine,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

export const COMPARATIVA = {
  title: "We Don't Sell Marketing. We Build Revenue Systems.",
  subtitle:
    "We are not here to sell random tactics. We commit to measurable progress, clear accountability, and decisions that protect your budget.",

  commitment: {
    heading: 'What We Promise as a Brand',
    description:
      "When you work with Crescendo, your business goals become our operating standard. If a strategy is not moving revenue, we adjust fast and transparently.",
    pillars: [
      {
        icon: faShieldHalved,
        text: 'We prioritize profitable growth over vanity metrics.',
      },
      {
        icon: faChartLine,
        text: 'We report what is working, what is not, and what changes next.',
      },
      {
        icon: faHandshake,
        text: 'We earn retention through performance, not long contracts.',
      },
    ],
  },

  table: {
    headers: ['Our Commitment', 'What It Means For Your Business'],
    rows: [
      {
        commitment: 'No long-term lock-ins',
        meaning:
          'You stay with us because results are clear, not because a contract traps you.',
      },
      {
        commitment: 'Weekly optimization rhythm',
        meaning:
          'Your ads, SEO, and pages improve continuously instead of being "set and forgotten."',
      },
      {
        commitment: 'Radical transparency',
        meaning:
          'You get plain-language reporting tied to leads, calls, and revenue impact.',
      },
      {
        commitment: 'Senior-level strategic oversight',
        meaning:
          'You work with specialists who adapt strategy quickly to your market and goals.',
      },
    ],
  },
} as const;