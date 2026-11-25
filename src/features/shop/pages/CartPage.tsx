import { useMemo } from 'react';

import { useCartStore } from '@/features/shop/store/cartStore';
import { currencyFormatter } from '@/shared/utils/currency-formatter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/shared/components/ui/Button';

import '@/features/shop/styles/pages/cart-page.css';

export const CartPage = () => {
  const items = useCartStore((state) => state.items);
  const remove = useCartStore((state) => state.remove);
  const removeAll = useCartStore((state) => state.removeAll);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const total = useMemo(
    () => items.reduce((acc, item) => acc + (item.units ?? 1) * Number(item.price ?? 0), 0),
    [items]
  );

  return (
    <div className='cart-page'>
      <aside className='cart-panel'>
        <h2 className='cart-panel__title'>
          Carrito (
          <span id='cartCount' className='cart-panel__count'>
            {totalItems}
          </span>
          )
        </h2>

        <div id='cartItems' className='cart-panel__items'>
          {items.length > 0 ? (
            items.map((item) => (
              <article key={item.article_id} className='product-card'>
                <img
                  src={item.image || 'not-photo_512.png'}
                  alt={item.title}
                  className='product-card__image'
                  loading='lazy'
                />

                <h2 className='product-card__title'>{item.title}</h2>
                <p className='product-card__price'>
                  {currencyFormatter(item.price)} X {item.units}
                </p>
                <p className='product-card__subtotal'>
                  {currencyFormatter(Number(item.price ?? 0) * item.units)}
                </p>
                <p className='product-card__remove'>
                  <Button
                    variant='outline'
                    size='sm'
                    type='button'
                    onClick={() => remove(item.article_id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </p>
              </article>
            ))
          ) : (
            <div className='cart-page__item'>
              <span>No hay articulos</span>
            </div>
          )}
        </div>

        <div className='cart-panel__summary'>
          <span className='cart-panel__total-label'>Total:</span>
          <span id='cartTotal' className='cart-panel__total-value'>
            {items.length > 0 ? currencyFormatter(total) : currencyFormatter(0)}
          </span>
        </div>

        <div className='cart-buttons'>
          <Button
            variant='outline'
            className='cart-buttons__btn cart-buttons__btn--clear'
            type='button'
            disabled={items.length === 0}
            onClick={removeAll}
          >
            Vaciar carrito
          </Button>
          <Button
            variant='primary'
            id='payBtn'
            className='cart-buttons__btn cart-buttons__btn--pay'
            type='button'
            disabled={items.length === 0}
          >
            Efectuar pago
          </Button>
        </div>
      </aside>
    </div>
  );
};