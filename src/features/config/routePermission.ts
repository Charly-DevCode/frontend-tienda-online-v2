import type { RoleUser } from '@/features/interfaces/user.base.dto';
import type { AppRouteKeys } from '@/features/utils/routeUtils';

export const publicRoutes = [
  'INDEX', 
  'ARTICLE_DETAIL', 
  'CART', 
  'LOGIN', 
  'REGISTER'  
] as const satisfies readonly AppRouteKeys[];

export const rolePermissions = {
  client: ['ACCOUNT', 'SHOPPING', 'HELP', 'SETTINGS', 'LOGOUT'],
  ecommerce_assistant: ['DASHBOARD', 'ARTICLES', 'INVOICES', 'LOGOUT'],
  it_support_specialist:[
      'DASHBOARD',
      'ARTICLES',
      'BRANDS',
      'CATEGORIES',
      'USERS',
      'INVOICES',
      'REPORTS', 
      'LOGOUT'
    ],
    manager: ['DASHBOARD', 'ARTICLES', 'INVOICES', 'REPORTS', 'LOGOUT']
} satisfies Record<RoleUser, readonly AppRouteKeys[]>;

export const routeTransitions = {
    INDEX: ['ARTICLE_DETAIL', 'LOGIN', 'REGISTER', 'CART', 'ACCOUNT'],
    ARTICLE_DETAIL: ['INDEX', 'LOGIN', 'REGISTER', 'CART'],
    LOGIN: ['INDEX', 'ACCOUNT', 'DASHBOARD'],
    REGISTER: ['LOGIN'],
    LOGOUT: ['INDEX', 'LOGIN'],
    
    CART: ['INDEX', 'ACCOUNT'],    
    ACCOUNT: ['INDEX', 'CART', 'SHOPPING', 'HELP', 'SETTINGS'],
    SHOPPING: ['ACCOUNT'],
    HELP: ['ACCOUNT'],
    SETTINGS: ['ACCOUNT'],

    DASHBOARD: [
      'ARTICLES',
      'BRANDS',
      'CATEGORIES',
      'USERS',
      'INVOICES',
      'REPORTS'
    ],
    INVOICES: ['DASHBOARD'],
    ARTICLES: ['DASHBOARD'],
    CATEGORIES: ['DASHBOARD'],
    BRANDS: ['DASHBOARD'],
    USERS: ['DASHBOARD'],
    REPORTS: ['DASHBOARD']
  } satisfies Record<AppRouteKeys, readonly AppRouteKeys[]>;