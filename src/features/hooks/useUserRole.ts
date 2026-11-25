import { useAuthStore } from "@/features/auth/store/auth.store";
import { normalizeUserRole } from "@/features/utils/routeUtils";

export const useUserRole = () => {
  const rawRole = useAuthStore((s) => s.user?.role);
  return normalizeUserRole(rawRole);
}
