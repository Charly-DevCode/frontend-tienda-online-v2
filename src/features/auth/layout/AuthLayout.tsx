import { Outlet } from 'react-router';

import '@/features/auth/styles/layout/auth-layout.css';

export const AuthLayout = () => {
  return (
    <div className="auth-layout">      
      <main className="auth-layout__main">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;