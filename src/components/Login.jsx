import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const authenticateUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3737/api/aspirantes/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!data.token) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await authenticateUser(email, password);
      // Aquí puedes guardar el token o cualquier otra información en el localStorage o context
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (error) {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-8 space-y-6 bg-white h-dvh">
      <form className="flex flex-col gap-2 p-6 border shadow-md rounded-lg" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <label htmlFor="email" className="text-sm text-start font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label  className="text-sm text-start font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
