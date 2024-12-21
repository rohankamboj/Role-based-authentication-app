import React, { createContext, useContext, useState } from 'react';
import { AuthContextType, User, Role } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const MOCK_USERS: Record<string, { password: string; user: User }> = {
  'admin@example.com': {
    password: 'admin123',
    user: { id: '1', name: 'Admin User', email: 'admin@example.com', role: 'admin' as Role }
  },
  'member@example.com': {
    password: 'member123',
    user: { id: '2', name: 'Member User', email: 'member@example.com', role: 'member' as Role }
  },
  'client@example.com': {
    password: 'client123',
    user: { id: '3', name: 'Client User', email: 'client@example.com', role: 'client' as Role }
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email: string, password: string) => {
    const userRecord = MOCK_USERS[email];
    
    if (!userRecord || userRecord.password !== password) {
      throw new Error('Invalid credentials');
    }

    setUser(userRecord.user);
    localStorage.setItem('user', JSON.stringify(userRecord.user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};