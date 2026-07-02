import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faInstagram,
  faFacebookF,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export const FloatingSocialButtons = () => {
  const socialLinks = [
    {
      icon: faGoogle,
      href: 'https://share.google/8QfBsfnQEEgWiNsAB',
      label: 'Google',
      bgColor: 'bg-[#4285F4]',
    },
    {
      icon: faInstagram,
      href: 'https://www.instagram.com/crescendodigitalagency?igsh=azZ3cmJxcG1oYWE%3D&utm_source=qr',
      label: 'Instagram',
      bgColor: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]',
    },
    {
      icon: faFacebookF,
      href: 'https://www.facebook.com/share/17KZQQkbay/?mibextid=wwXIfr',
      label: 'Facebook',
      bgColor: 'bg-[#1877F2]',
    },
    {
      icon: faWhatsapp,
      href: 'https://wa.me/17867556238',
      label: 'WhatsApp',
      bgColor: 'bg-[#25D366]',
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3.5 z-50">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 ${link.bgColor}`}
          aria-label={link.label}
          title={link.label}
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  );
};