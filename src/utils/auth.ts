/**
 * Authentication utility functions
 */

import { Role, User } from '../types/auth';

/**
 * Checks if a user has permission to access a specific route
 */
export const hasRouteAccess = (user: User | null, allowedRoles: Role[]): boolean => {
  if (!user) return false;
  return allowedRoles.includes(user.role);
};

/**
 * Validates user credentials format
 */
export const validateCredentials = (email: string, password: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && password.length >= 6;
};

/**
 * Gets the redirect path based on user role
 */
export const getDefaultRedirectPath = (role: Role): string => {
  const paths: Record<Role, string> = {
    admin: '/admin',
    member: '/member',
    client: '/client',
  };
  return paths[role];
};