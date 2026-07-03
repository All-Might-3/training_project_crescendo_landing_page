// src/utils/porque_constants.ts
import { 
  faBullseye, 
  faChartLine, 
  faLockOpen, 
  faCertificate 
} from '@fortawesome/free-solid-svg-icons';

export const POR_QUE = {
  title: 'Not Another Agency. Your Growth Partner.',
  description: 'We plug into your business like a high-performance marketing unit. Every campaign, page, and message is built to generate profitable growth you can actually measure.',
  items: [
    {
      id: 1,
      icon: faBullseye,
      title: 'Enfoque en ROI',
      description: 'Every action is aimed at generating positive return on investment for your business.',
    },
    {
      id: 2,
      icon: faChartLine,
      title: 'Total Transparency',
      description: 'You\'ll receive clear, detailed reports to know how your investment is performing.',
    },
    {
      id: 3,
      icon: faLockOpen,
      title: 'No Long-Term Contracts',
      description: 'We trust in our work. No legal ties, you can cancel anytime.',
    },
    {
      id: 4,
      icon: faCertificate,
      title: 'Certified Experts',
      description: 'Team certified by Google Partner and Meta Partner with years of experience.',
    },
  ],
  image: 'images/teamwork.png', 
};