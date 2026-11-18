import { Link } from 'react-router';
import '@/shared/styles/components/custom-logo.css';

interface Props {
  subtitle?: string;
  variant?: 'default' | 'light'; // 'default' para el navbar beige, 'light' para el footer zafiro
}

export const CustomLogo = ({ subtitle = 'Shop', variant = 'default' }: Props) => {
  return (
    <Link to='/' className={`custom-logo custom-logo--${variant}`}>
      <span className='custom-logo__title'>MegaStore</span>
      {subtitle && (
        <>
          <span className='custom-logo__divider' aria-hidden='true'>|</span>
          <span className='custom-logo__subtitle'>{subtitle}</span>
        </>
      )}
    </Link>
  );
};