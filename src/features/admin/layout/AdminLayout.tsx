import { Navigate, Outlet } from 'react-router';

import { useUserRole } from '@/features/hooks/useUserRole';

import { SideBar } from '@/features/components/SideBar';

import { 
  ROLES, 
  type RoleUser 
} from '@/features/interfaces/user.base.dto';

import '@/features/admin/styles/layout/admin-layout.css';


const STAFF_ROLES = new Set(
  ROLES.filter((role): role is RoleUser => role !== 'client')
);

const AdminLayout = () => {
  const role = useUserRole();

  if (!role || !STAFF_ROLES.has(role)) {
    return <Navigate to='/' replace />;
  }
  
  return (
    <div className='admin-layout'>
      <SideBar role={ role } />
      <main className='admin-layout__main'>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;