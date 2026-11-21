import { api } from "@/shared/api/api";

import type { 
  IAuthResponse, 
  IUserLogin 
} from "@/features/auth/interfaces/auth.dto";

export const loginAction = async ({ 
  email, 
  password 
}: IUserLogin): Promise<IAuthResponse> => {
  try {
    const { data } = await api.post<IAuthResponse>('/auth/login', {
      email,
      password
    })

    return data
  } catch (error) {
    throw error;
  }
}
