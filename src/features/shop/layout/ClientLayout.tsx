import { Outlet } from 'react-router'

import { CustomHeader } from '@/features/shop/components/CustomHeader'
import { CustomFooter } from '@/features/shop/components/CustomFooter'

const ClientLayout = () => {
  return (
    <div className='account-layout'>
      <CustomHeader />

      <main className='account-layout__main'>        
        <Outlet />
      </main>

      <CustomFooter />
    </div>
  )
}

export default ClientLayout;