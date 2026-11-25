import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import { ShopLayout } from '@/features/shop/layout/ShopLayout';
const AuthLayout = lazy(
  () => import('@/features/auth/layout/AuthLayout')
);
const ClientLayout = lazy(
  () => import('@/features/shop/layout/ClientLayout')
);
const AdminLayout = lazy(
  () => import('@/features/admin/layout/AdminLayout')
);

import { 
  AdminRoutes, 
  ClientRoutes 
} from '@/features/routes/ProtectedRoute';

import { HomePage } from '@/features/shop/pages/HomePage';
import { ArticleDetailPage } from '@/features/shop/pages/ArticleDetailPage';
import { CartPage } from '@/features/shop/pages/CartPage';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { RegisterPage } from '@/features/auth/pages/RegisterPage';
import { AccountPage } from '@/features/shop/pages/AccountPage';
import { PaymentPage } from '@/features/shop/pages/PaymentPage';
import { DashboardPage } from '@/features/admin/pages/DashboardPage';


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
        path: 'cart',
        element: <CartPage />
      }
    ]
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/auth/login' replace />,
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
  },

  {
    path: '/account',
    element: (
      <ClientRoutes>
        <ClientLayout />
      </ClientRoutes>
    ),
    children: [
      {
        index: true,
        element: <AccountPage />,
      },

      {
        path: 'payment',
        element: <PaymentPage />
      }
    ]
  },

  {
    path: '/admin',
    element: (
      <AdminRoutes>
        <AdminLayout />
      </AdminRoutes>
    ),
    children: [
      {
        index: true,        
        element: <DashboardPage />
      }
    ]
  },

  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);