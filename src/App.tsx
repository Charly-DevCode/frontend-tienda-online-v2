import { RouterProvider } from 'react-router';
import { Suspense, type PropsWithChildren } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { useAuthStore } from './features/auth/store/auth.store';
import { appRouter } from '@/features/routes/appRouter';

const queryClient = new QueryClient();

const CheckAuthProvider = ({ children }: PropsWithChildren) => {
  const { checkAuthStatus } = useAuthStore()

  const { isLoading } = useQuery({
    queryKey: ['auth'],
    queryFn: checkAuthStatus,
    retry: false,
    refetchInterval: 1000 * 60 * 1.5,
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <h1>loading...</h1>;

  return children;
};

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CheckAuthProvider>
        <Suspense fallback={null}>
          <RouterProvider router={appRouter} />
        </Suspense>
      </CheckAuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};