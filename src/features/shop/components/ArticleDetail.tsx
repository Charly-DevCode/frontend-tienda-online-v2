import { Button } from '@/shared/components/ui/Button';

import type { IArticlePublic } from '@/features/shop/interfaces/articles.dto';

import { currencyFormatter } from '@/shared/utils/currency-formatter';

import '@/features/shop/styles/components/article-detail.css';
import { QuantityStepper } from '@/shared/components/ui/QuantityStepper';

interface ArticleDetailProps {
  article: IArticlePublic;
  counter: number;
  increment: () => void;
  decrement: () => void;
  onAddToCart: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ArticleDetail = ({
  article,
  counter,
  increment,
  decrement,
  onAddToCart,
}: ArticleDetailProps) => {
  return (
    <section className='article-detail'>
      <div className='article-detail__image-container'>
        <img
          src={article.image ?? 'not-photo_512.png'}
          alt={article.title}
        />
      </div>

      <div className='article-detail__info'>
        <h1 className='article-detail__title'>{article.title}</h1>

        <div className='article-detail__price'>{ currencyFormatter(article.price) }</div>

        <div className='article-detail__quantity'>
          <QuantityStepper 
            value={counter}
            onIncrement={increment}
            onDecrement={decrement}
            min={1}
            max={article.stock}
          />
        </div>

        <div className='article-detail__btn'>
          <Button
            variant='primary'
            type='button'
            size='sm'
            onClick={onAddToCart}
          >
            Agregar al carrito
          </Button>
        </div>

        <div className='article-detail__specs'>
          <p><strong>Marca:</strong> {article.brand_name}</p>
          <p><strong>Categoría:</strong> {article.category_name}</p>
          {article.detail ? (
            <p><strong>Descripción:</strong> {article.detail}</p>
          ) : (
            <p><strong>Descripción:</strong> Sin descripción</p>
          )}
        </div>
      </div>
    </section>
  );
};