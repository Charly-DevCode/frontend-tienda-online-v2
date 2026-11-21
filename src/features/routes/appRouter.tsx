import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "@/features/shop/layout/ShopLayout";

import { HomePage } from "@/features/shop/pages/HomePage";
import { ArticleDetailPage } from "@/features/shop/pages/ArticleDetailPage";
import AuthLayout from "@/features/auth/layout/AuthLayout";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'articles/:idSlug',
        element: <ArticleDetailPage />
      },

      {
        path: '*',
        element: <Navigate to='/' replace />
      },
    ]
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/auth/login' />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
    ]
  }
]);