import { useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { Button } from '@/shared/components/ui/Button';
import { CustomLogo } from '@/shared/components/CustomLogo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRightToBracket,
  faUserPlus,
  faCircleUser,
  faUserGear,
  faMagnifyingGlass,
  faCartShopping,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

import '@/features/shop/styles/components/custom-navbar.css';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { useCartStore } from '@/features/shop/store/cartStore';


export const CustomNavbar = () => {
  const [, setSearchParams] = useSearchParams();

  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const cartCounter = useCartStore((s) => s.getTotalItems());

  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const query = inputRef.current?.value;
    handleSearch(query);
  }

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      handleSearch(inputRef.current?.value);
    }
  }

  const handleSearch = (query: string | undefined) => {
    const trimmed = query?.trim() ?? '';

    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      if (!trimmed || trimmed === 'none' || trimmed.length < 2) {
        newParams.delete('query');
      } else {
        // Como ya filtramos el undefined, TypeScript sabe que 'title' es un string puro
        newParams.set('query', trimmed);
      }
      return newParams;
    })
  }

  return (
    <nav className='navbar' aria-label='Navegación principal'>
      <div className='navbar__container'>
        <CustomLogo />
        <div className='navbar__search' role='search'>
          <input
            type='search'
            placeholder='Buscar tecnología, herramientas...'
            aria-label='Buscar productos'
            className='navbar__search-input'
            ref={inputRef}
            onKeyDown={handleKeyPress}
          />
          <button
            type='button'
            aria-label='Buscar'
            className='navbar__search-btn'
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className='navbar__actions'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => navigate('/cart')}
            className='navbar__cart-btn'
            aria-label='Carrito de compras'
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <span className='navbar__cart-badge'>
              { cartCounter }
            </span>
          </Button>          

          {
            user ? (
              <>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={logout}
                  className='navbar__auth-btn'
                >
                  <FontAwesomeIcon icon={faXmark} />
                  <span>Cerrar sesión</span>
                </Button>

                { 
                  user?.role === 'client' ? (
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => navigate('/account')}
                      className='navbar__auth-btn'
                    >
                      <FontAwesomeIcon icon={faCircleUser} />
                      <span>Cuenta</span>
                    </Button>
                  ): (
                    <Button
                      variant='outline'  
                      size='sm'   
                      onClick={() => navigate('/admin')}                 
                      className='navbar__auth-btn'
                    >
                      <FontAwesomeIcon icon={faUserGear} />
                      <span>Admin</span>
                    </Button>
                  )
                }
              </>
            ) : (
              <>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => navigate('/auth/register')}
                  className='navbar__auth-btn'
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span>Registrarse</span>
                </Button>

                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => navigate('/auth/login')}
                  className='navbar__auth-btn'
                >
                  <FontAwesomeIcon icon={faRightToBracket} />
                  <span>Ingresar</span>
                </Button>
              </>
            )
          }
        </div>
      </div>
    </nav>
  );
}