import type { IItemBase } from "@/features/interfaces/item.base.dto";
import type { IArticlePublic } from "@/features/shop/interfaces/articles.dto";

export interface IItemCard extends IItemBase{
  image?: string | null;
}

export const toItemCard = (
  article: IArticlePublic, 
  units: number
): IItemCard => ({
  article_id: article.id,
  title: article.title,  
  units,
  price: article.price,
  image: article.image || null,
});


// Para el backend que no acepta imagen
export const CardToBase = (
  item: IItemCard
): IItemBase => ({
  article_id: item.article_id,
  title: item.title,  
  units: item.units,
  price: item.price,
});