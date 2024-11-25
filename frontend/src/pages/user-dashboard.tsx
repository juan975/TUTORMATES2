// src/pages/user-dashboard.tsx
import React from 'react';
import PrivateRoute from '../app/app/components/user-list/PrivateRoute';

const UserDashboard = () => {
  return (
    <PrivateRoute allowedRoles={['estudiante', 'tutor']}>
      <h1>Hola de regreso</h1>
      <p>Bienvenido, estudiante o tutor.</p>
    </PrivateRoute>
  );
};

export default UserDashboard;

