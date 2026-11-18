import { Link } from "react-router"

import type { 
  IArticlePublic 
} from "@/features/shop/interfaces/articles.dto"

import '@/features/shop/styles/components/article-card.css';

interface ArticleCardProps {
  article: Partial<IArticlePublic>
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className='article-card'>
      <Link to={`/articles/${article.slug}`} className='article-card__link'>
        {article.image ? (
          <img
            src={article.image ?? 'not-photo_512.png'}
            alt={article.title}
            className='article-card__image'
          />
        ) : (
          <div className='article-card__image-placeholder'>
            {article.title}
          </div>
        )}
      </Link>

      <h4 className='article-card__title'>
        {article.title}
      </h4>

      <div className='article-card__price'>
        ${article.price}
      </div>
    </div>
  )
}
