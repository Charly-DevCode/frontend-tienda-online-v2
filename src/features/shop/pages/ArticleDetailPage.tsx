import { useParams } from 'react-router';

import {
  useArticleBySlug
} from '@/features/shop/hooks/useArticleBySlug';
import {
  useCounter
} from '@/features/shop/hooks/useCounter';
import { useCartStore } from '@/features/shop/store/cartStore';

import { ArticleDetail } from '@/features/shop/components/ArticleDetail';

//import type { IItemBase } from '@/features/interfaces/item.base.dto';
import { 
  toItemCard,
  type IItemCard} from '@/features/shop/interfaces/items.dto';


export const ArticleDetailPage = () => {
  const { idSlug } = useParams();
  const add = useCartStore((state) => state.add);

  const {
    data: article,
    isLoading,
    isError,
  } = useArticleBySlug(idSlug);  

  const { counter, increment, decrement } = useCounter({
    init: 1,
    maxQuantity: article?.stock ?? 0,
    minQuantity: 1
  });

  if (isLoading) return <p>Cargando artículo...</p>;

  if (isError || !article) return <p>No se pudo encontrar el artículo.</p>;  

  const handleAddCart = () => {
    const item: IItemCard = toItemCard(article, counter);
    add(item);
  }

  return (
    <ArticleDetail
      article={article}
      counter={counter}

      increment={increment}
      decrement={decrement}
      onAddToCart={handleAddCart}
    />
  )
}