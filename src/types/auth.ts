export type Role = 'admin' | 'member' | 'client';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}