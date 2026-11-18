import { 
  AnnouncementBar, 
  type AnnouncementItem 
} from '@/features/shop/components/AnnouncementBar';
import { 
  CustomNavbar 
} from '@/features/shop/components/CustomNavbar';

import { 
  faTag, 
  faCampground, 
  faTruckFast 
} from '@fortawesome/free-solid-svg-icons';


export const CustomHeader = () => {  
  const promotions: AnnouncementItem[] = [
    { 
      id: 1, 
      text: 'Descuentos Tech (-20%)', 
      to: '/discounts', 
      icon: faTag 
    },
    { 
      id: 2, 
      text: 'Kit Camping Outdoor', 
      to: '/camping', 
      icon: faCampground 
    },
    { 
      id: 3, 
      text: 'Envíos Gratis a Todo el País', 
      to: '/shipping', 
      icon: faTruckFast 
    },
  ];

  return (
    <header>
      {/* Navbar Principal */}      
      <CustomNavbar />      

      {/* Sub-barra de Anuncios */}
      <AnnouncementBar items={ promotions } />
    </header>
  );
};