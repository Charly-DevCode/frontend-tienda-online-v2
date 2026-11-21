import { useSearchParams } from "react-router"

import { usePaginatedArticles } from "@/features/shop/hooks/usePaginatedArticles";

import { ArticlesGrid } from "@/features/shop/components/ArticlesGrid";
import { CustomPaginator } from "@/shared/components/CustomPaginator";

import type { 
  IArticleQueryParams 
} from "@/features/interfaces/article.query.params";

import { parsePositiveInt } from "@/shared/utils/parsers";


export const HomePage = () => {   
  const [ searchParams, setSearchParams ] = useSearchParams();  

  const queryParams: IArticleQueryParams = {
    page_size: Number(searchParams.get('page_size') || 6),
    page: parsePositiveInt(searchParams.get('page'), 1),
    title: searchParams.get('query') || undefined,
    //category: searchParams.get('category') || undefined,
    //brands: searchParams.get('brand') || undefined,
  }

  const handlePageChange = (newPage: number) => {
    setSearchParams((prev) => {
      if (newPage === 1) {
        prev.delete('page');
      } else {
        prev.set('page', String(newPage));
      }
      return prev;
    });
  }

  const { data, isError, isLoading } = usePaginatedArticles(queryParams);

   if (isLoading) return <p>Cargando catálogo...</p>;

  if (isError) return <p>Hubo un error al cargar los artículos.</p>; 

  return (
    <div className="home-page">
      <ArticlesGrid articles={ data?.articles ?? [] } />

      <CustomPaginator 
        page={ data?.page ?? 1} 
        pages={ data?.pages ?? 1 } 
        onPageChange={ handlePageChange } 
      />
    </div>
  )
}
