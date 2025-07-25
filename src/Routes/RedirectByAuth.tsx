import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../Store/hooks';

export default function RedirectByAuth() {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || isLoading) return null;

  return isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />;
}
