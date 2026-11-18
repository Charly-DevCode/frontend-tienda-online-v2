import { useQuery } from "@tanstack/react-query"

import { 
  getArticlesPaginatedAction 
} from "@/features/shop/actions/get-articles-paginated.action"

import type { 
  IArticleQueryParams 
} from "@/features/interfaces/article.query.params"

export const usePaginatedArticles = (params: IArticleQueryParams) => {
  return useQuery({
    queryKey: ['shop-articles', params],
    queryFn: () => getArticlesPaginatedAction(params),
    staleTime: 1000 * 60 * 5, // 5 Minutes
  })
}