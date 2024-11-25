// src/components/PrivateRoute.tsx
import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface PrivateRouteProps {
  children: ReactNode;
  allowedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, allowedRoles }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role && allowedRoles.includes(role)) {
      setIsAuthorized(true);
    } else {
      router.push('/login');
    }
    setIsLoading(false);
  }, [router, allowedRoles]);

  if (isLoading) return <div>Loading...</div>;

  return isAuthorized ? <>{children}</> : null;
};

export default PrivateRoute;
