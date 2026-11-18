import { Outlet } from 'react-router';

import { CustomHeader } from '@/features/shop/components/CustomHeader';
import { CustomFooter } from '@/features/shop/components/CustomFooter';

export const ShopLayout = () => {
  return (
    <div className="shop-layout">
      <CustomHeader />

      <main className="shop-layout__main">
        <Outlet />
      </main>

      <CustomFooter />
    </div>
  );
}
