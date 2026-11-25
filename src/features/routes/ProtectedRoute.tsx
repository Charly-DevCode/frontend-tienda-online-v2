import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

import { useAuthStore } from '@/features/auth/store/auth.store';
import { ROLES, type RoleUser } from '@/features/interfaces/user.base.dto';
import { useUserRole } from '@/features/hooks/useUserRole';

const ADMIN_ROLES = new Set(
  ROLES.filter((role): role is RoleUser => role !== 'client')
);

export const AuthenticatedRoutes = ({ children }: PropsWithChildren) => {
  const status = useAuthStore((s) => s.authStatus);

  if (status === 'checking') return null;

  if (status === 'not-authenticated') {
    return <Navigate to='/auth/login' replace />;
  }
  return children;
}

export const ClientRoutes = ({ children }: PropsWithChildren) => {  
  const status = useAuthStore((s) => s.authStatus);
  const role = useUserRole();

  if (status === 'checking') return null;

  if (status === 'not-authenticated') {
    return <Navigate to='/auth/login' replace />
  }

  if (role !== 'client') return <Navigate to='/' />;
  
  return children;
}

export const AdminRoutes = ({ children }: PropsWithChildren) => {  
  const status = useAuthStore((s) => s.authStatus);
  const role = useUserRole();

  if (status === 'checking') return null;

  if (status === 'not-authenticated') {
    return <Navigate to='/auth/login' replace />
  }

  if (!role || !ADMIN_ROLES.has(role)) return <Navigate to='/' />;
  
  return children;
}