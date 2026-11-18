import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';
import '@/shared/styles/components/social-links.css';

interface SocialLinksProps {
  variant?: 'light' | 'dark'; // 'light' para el footer zafiro, 'dark' para fondos claros
}

const SOCIAL_NETWORKS = [
  { name: 'Facebook', url: 'https://facebook.com', icon: faFacebookF },
  { name: 'Instagram', url: 'https://instagram.com', icon: faInstagram },
  { name: 'TikTok', url: 'https://tiktok.com', icon: faTiktok },
];

export const SocialLinks = ({ variant = 'light' }: SocialLinksProps) => {
  return (
    <div className={`social-links social-links--${variant}`}>
      {SOCIAL_NETWORKS.map(({ name, url, icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="social-links__item"
        >
          <FontAwesomeIcon icon={icon} />
        </a>
      ))}
    </div>
  );
};