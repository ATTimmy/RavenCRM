import { Navigate } from 'react-router-dom';
import { type ReactElement, useEffect, useState } from 'react';
import { useAppSelector } from '../Store/hooks';

type Props = {
  children: ReactElement;
};

export default function PrivateRoute({ children }: Props): ReactElement | null {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  if (isLoading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
