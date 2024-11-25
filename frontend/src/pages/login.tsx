// src/pages/login.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../app/app/components/user-list/login-form';

const LoginPage = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      const { token, role } = data;

      // Almacenar el token y el rol en el localStorage (o en cookies)
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Redirigir al dashboard dependiendo del rol
      if (role === 'admin') {
        router.push('/admin-dashboard');
      } else if (role === 'estudiante' || role === 'tutor') {
        router.push('/user-dashboard');
      }
    } catch (error: unknown) {  // El tipo del error es `unknown`
      if (error instanceof Error) {
        setError(error.message);  // Aquí estamos usando `error.message`
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
