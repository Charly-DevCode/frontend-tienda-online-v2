import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "@/features/shop/layout/ShopLayout";

import { HomePage } from "@/features/shop/pages/home/HomePage";
import { ArticleDetailPage } from "@/features/shop/pages/article/ArticleDetailPage";
import AuthLayout from "@/features/auth/layout/AuthLayout";
import { LoginPage } from "@/features/auth/pages/login/LoginPage";
import { RegisterPage } from "@/features/auth/pages/register/RegisterPage";

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