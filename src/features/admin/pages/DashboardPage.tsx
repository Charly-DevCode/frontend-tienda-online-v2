import { Navigate } from 'react-router';

import { 
  ManagerDashboard 
} from '@/features/admin/components/ManagerDashboard';
import { 
  EcommerceDashboard 
} from '@/features/admin/components/EcommerceDashboard';
import { 
  SupportDashboard 
} from '@/features/admin/components/SupportDashboard';


import { useAuthStore } from '@/features/auth/store/auth.store';
import { normalizeUserRole } from '@/features/utils/routeUtils';


export const DashboardPage = () => {
  const user = useAuthStore((s) => s.user);
  const role = normalizeUserRole(user?.role);

  switch (role) {
    case 'manager':
      return <ManagerDashboard />;
    case 'ecommerce_assistant':
      return <EcommerceDashboard />;
    case 'it_support_specialist':
      return <SupportDashboard />;
    default:
      return <Navigate to='/' replace />;;
  }
}