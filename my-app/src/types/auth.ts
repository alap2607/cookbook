// Authentication state
export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
}

// Login request payload
export interface LoginRequest {
  password: string;
}

// Login response from API
export interface LoginResponse {
  success: boolean;
  token: string;
  message?: string;
}

// Validate token response from API
export interface ValidateTokenResponse {
  valid: boolean;
}

// Auth context type
export interface AuthContextType {
  authState: AuthState;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => boolean;
}
