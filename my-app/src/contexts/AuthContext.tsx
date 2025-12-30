import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { AuthState, AuthContextType } from '../types/auth';
import * as api from '../services/api';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_TOKEN_KEY = 'admin_auth_token';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    loading: true,
  });

  // Check for existing session on mount
  useEffect(() => {
    const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      // Validate token with backend
      api.validateToken(token)
        .then((result) => {
          setAuthState({ isAuthenticated: result.valid, loading: false });
          if (!result.valid) {
            sessionStorage.removeItem(AUTH_TOKEN_KEY);
          }
        })
        .catch(() => {
          setAuthState({ isAuthenticated: false, loading: false });
          sessionStorage.removeItem(AUTH_TOKEN_KEY);
        });
    } else {
      setAuthState({ isAuthenticated: false, loading: false });
    }
  }, []);

  const login = async (password: string): Promise<boolean> => {
    try {
      const response = await api.login(password);
      if (response.success) {
        sessionStorage.setItem(AUTH_TOKEN_KEY, response.token);
        setAuthState({ isAuthenticated: true, loading: false });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    setAuthState({ isAuthenticated: false, loading: false });
  };

  const checkAuth = (): boolean => {
    return !!sessionStorage.getItem(AUTH_TOKEN_KEY) && authState.isAuthenticated;
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
