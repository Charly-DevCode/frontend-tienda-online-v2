import { create } from "zustand";

import { loginAction } from "@/features/auth/actions/login.action";
import { 
  checkAuthAction 
} from "@/features/auth/actions/check-auth.action";

import type { 
  IUserResponse  
} from "@/features/interfaces/user.base.dto";


type AuthStatus = 'authenticated' | 'not-authenticated' | 'checking';

type AuthState = {
  // Properties
  user: IUserResponse | null;  
  token: string | null;
  authStatus: AuthStatus;

  // Actions
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;  
  checkAuthStatus: () => Promise<boolean>;
};

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,  
  token: null,
  authStatus: 'checking',

  // Actions
  login: async (email: string, password: string) => {
    //console.log({ email, password });

    try {
      const data = await loginAction({email, password});
      //console.log('Token: ' + data.token)
      localStorage.setItem('token', data.token);
      
      set({     
        user: data.user,   
        token: data.token, 
        authStatus: 'authenticated' 
      });
      return true;
    } catch (error) {
      localStorage.removeItem('token');
      set({ 
        user: null,
        token: null, 
        authStatus: 'not-authenticated' 
      });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ 
      user: null,
      token: null, 
      authStatus: 'not-authenticated' 
    });
  },

  checkAuthStatus: async () => {
    try {
      const { user, token } = await checkAuthAction();
      set({
        user: user,
        token: token,
        authStatus: 'authenticated'
      });
      return true;  
          
    } catch (error) {
      //console.error('checkAuthStatus falló:', error);
      localStorage.removeItem('token');

      set({
        user: null,
        token: null,
        authStatus: 'not-authenticated',
      });

      return false;
    }
  },
}));