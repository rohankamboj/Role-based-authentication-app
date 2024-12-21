import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getDefaultRedirectPath } from '../utils/auth';

/**
 * Hook to redirect authenticated users away from public pages
 */
export const useRedirectIfAuthenticated = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate(getDefaultRedirectPath(user.role), { replace: true });
    }
  }, [isAuthenticated, user, navigate]);
};