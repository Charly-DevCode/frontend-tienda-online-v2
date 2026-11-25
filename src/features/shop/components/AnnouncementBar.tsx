import { Link } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

import '@/features/shop/styles/components/announcement-bar.css';

// Definimos la estructura de cada anuncio individual
export interface AnnouncementItem {
  id: string | number;
  text: string;
  to: string;
  icon?: IconProp;
}

// Definimos las props que recibirá el componente completo
interface AnnouncementBarProps {
  title?: string; // Opcional, por si quieres cambiar el texto '⚡ Ofertas de Temporada'
  items: AnnouncementItem[];
}

export const AnnouncementBar = ({ 
  title = 'Ofertas de Temporada', 
  items 
}: AnnouncementBarProps) => {
  return (
    <nav className='announcement-bar'>
      <span className='announcement-bar__title'>        
        <FontAwesomeIcon 
          icon={faBolt} 
          className='announcement-bar__icon announcement-bar__icon--accent' 
        />
        {title}
      </span>
      
      {items.map((item) => (
        <Link key={item.id} to={item.to} className='announcement-bar__link'>
          {item.icon && (
            <FontAwesomeIcon 
              icon={item.icon} 
              className='announcement-bar__icon' 
            />
          )}
          {item.text}
        </Link>
      ))}
    </nav>
  );
};