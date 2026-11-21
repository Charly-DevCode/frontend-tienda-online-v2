import { rolePermissions } from '@/features/config/routePermission';

import {
  faRightToBracket,
  faUser,
  faUsers,
  faUserPlus,
  faHouse,
  faBookmark,
  faCartShopping,  
  faRightFromBracket,
  faGauge,  
  faFileLines,
  faEye,
  faReceipt,
  faTags,
  faChartBar,  
} from '@fortawesome/free-solid-svg-icons';

import {
  type RoleUser,
  ROLES,
} from '@/features/interfaces/user.base.dto';

export const AppRoutes = {
  // 1. Tienda Pública y Portal del Cliente (ShopLayout)
  INDEX: { key: 'INDEX', path: '/', name: 'Index', icon: faHouse },
  ARTICLE_DETAIL: { key: 'ARTICLE_DETAIL', path: '/article-detail', name: 'ArticleDetail', icon: faEye },
  CART: { key: 'CART', path: '/cart', name: 'Cart', icon: faCartShopping },  
  ACCOUNT: { key: 'ACCOUNT', path: '/account', name: 'Account', icon: faUser },

  // 2. Autenticación (AuthLayout)
  LOGIN: { key: 'LOGIN', path: '/auth/login', name: 'Login', icon: faRightToBracket },
  REGISTER: { key: 'REGISTER', path: '/auth/register', name: 'Register', icon: faUserPlus },
  LOGOUT: { key: 'LOGOUT', path: '/auth/logout', name: 'Logout', icon: faRightFromBracket },

  // 3. Panel Administrativo - Staff (AdminLayout bajo /admin)
  DASHBOARD: { key: 'DASHBOARD', path: '/admin', name: 'Dashboard', icon: faGauge },
  USERS: { key: 'USERS', path: '/admin/users', name: 'Users', icon: faUsers },
  ARTICLES: { key: 'ARTICLES', path: '/admin/articles', name: 'Articles', icon: faFileLines },
  INVOICES: { key: 'INVOICES', path: '/admin/invoices', name: 'Invoices', icon: faReceipt },
  CATEGORIES: { key: 'CATEGORIES', path: '/admin/categories', name: 'Categories', icon: faTags },
  BRANDS: { key: 'BRANDS', path: '/admin/brands', name: 'Brands', icon: faBookmark },
  REPORTS: { key: 'REPORTS', path: '/admin/reports', name: 'Reports', icon: faChartBar },
} as const;

export type AppRouteKeys = keyof typeof AppRoutes;

export const getRoutePath = (route: AppRouteKeys): string => AppRoutes[route].path;
/* export const getRouteName = (route: AppRouteKeys): string => AppRoutes[route].name;
export const getRouteFromPath = (path: string): AppRouteKeys | undefined => {
  const entry = Object.entries(AppRoutes).find(([_, info]) => info.path === path);
  return entry ? (entry[0] as AppRouteKeys) : undefined;
}; */

export type RouteInfoType = (typeof AppRoutes)[AppRouteKeys];

export function normalizeUserRole(role: string | undefined): RoleUser | undefined {
  if (!role) return undefined;

  if ((ROLES as readonly string[]).includes(role)) {
    return role as RoleUser;
  }

  return undefined;
}

const keyRoutes = (route: AppRouteKeys) => AppRoutes[route];

export const getPermissionsByRole = (role: RoleUser | undefined) =>
  role ? rolePermissions[role].map(keyRoutes) : [];

export const getDefaultRouteByRole = (role: RoleUser): string => {
  return role === 'client' ? getRoutePath('ACCOUNT') : getRoutePath('DASHBOARD');
};