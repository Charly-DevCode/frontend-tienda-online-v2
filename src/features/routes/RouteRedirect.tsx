import { Navigate } from 'react-router';

import { useAuthStore } from '@/features/auth/store/auth.store';
import { normalizeUserRole } from '@/features/utils/routeUtils';

export const RouteRedirect = () => {
  const role = useAuthStore((s) => normalizeUserRole(s.user?.role));
  
  switch (role) {
    case 'client':
      return <Navigate to='/account' replace />;
    case 'manager':      
    case 'ecommerce_assistant':      
    case 'it_support_specialist':
      return <Navigate to='/admin' replace />;
    default:
      return <Navigate to='/' replace />;
  }
}
