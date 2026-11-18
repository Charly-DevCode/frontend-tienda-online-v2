import { create } from 'zustand';

import type { AppRouteKeys } from '@/features/utils/routeUtils';


interface NavigationState {
  currentRoute: AppRouteKeys | null;
  previousRoute: AppRouteKeys | null;
  setRoute: (route: AppRouteKeys) => void;
}

export const useNavigationStore = create<NavigationState>()((set) => ({
  currentRoute: null,
  previousRoute: null,
  setRoute: (route) =>
    set((state) => {
      // Evitamos duplicar si la ruta actual es exactamente la misma
      if (state.currentRoute === route) return state;
      
      return {
        previousRoute: state.currentRoute,
        currentRoute: route,
      };
    }),
}));