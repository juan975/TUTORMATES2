import React from 'react';
import PrivateRoute from '../app/app/components/user-list/PrivateRoute';

const AdminDashboard = () => {
  return (
    <PrivateRoute allowedRoles={['admin']}>
      <h1>Bienvenido Admin</h1>
      <p>Desde aquí puedes gestionar los usuarios.</p>
      {/* Aquí iría el CRUD de usuarios */}
    </PrivateRoute>
  );
};

export default AdminDashboard;
