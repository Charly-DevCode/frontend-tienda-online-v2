import type { 
  IArticlePublic 
} from '@/features/shop/interfaces/articles.dto'
import { ArticleCard } from './ArticleCard';

import '@/features/shop/styles/components/articles-grid.css';

interface ArticlesGridProps {
  articles: IArticlePublic[];
}

export const ArticlesGrid = ({ articles }: ArticlesGridProps) => {
  return (
    <div className='articles-grid'>
      {
        articles.map( (article) => (
          <ArticleCard article={ article } key={ article.id }/>
        ))
      }
    </div>
  )
}