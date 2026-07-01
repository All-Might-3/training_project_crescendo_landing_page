// src/utils/clientes_constants.ts
//import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBuilding,
  faHospital,
  faUtensils,
  faCar,
  faHammer,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

export const CLIENTES = {
  title: 'Trusted by over 50 businesses in South Florida',
  logos: [
    { id: 1, icon: faBuilding, label: 'Construcción' },
    { id: 2, icon: faHospital, label: 'Salud' },
    { id: 3, icon: faUtensils, label: 'Restaurantes' },
    { id: 4, icon: faCar, label: 'Automotriz' },
    { id: 5, icon: faHammer, label: 'Servicios' },
    { id: 6, icon: faBriefcase, label: 'Negocios' },
  ],
} as const;