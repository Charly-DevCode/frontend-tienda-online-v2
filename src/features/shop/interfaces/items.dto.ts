import type { IItemBase } from "@/features/interfaces/item.base.dto";
import type { IArticlePublic } from "@/features/shop/interfaces/articles.dto";

export const toItemBase = (
  article: IArticlePublic, 
  units: number
): IItemBase => ({
  article_id: article.id,
  title: article.title,
  units,
  price: article.price,
});