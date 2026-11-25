import { Navigate } from "react-router";

import { useUserRole } from "@/features/hooks/useUserRole";

import { SideBar } from "@/features/components/SideBar"


export const AccountPage = () => {
  const role = useUserRole();

  if (role !== 'client') {
    return <Navigate to="/" replace />;
  }

  return <SideBar role={role} />;
};
