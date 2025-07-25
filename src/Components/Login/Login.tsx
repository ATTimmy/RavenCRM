import { useState } from 'react';
import { LoginForm } from './Components/LoginForm';
import { RegisterForm } from './Components/RegisterForm';

export default function Login() {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return mode === 'login' ? (
    <LoginForm onSwitch={() => setMode('register')} />
  ) : (
    <RegisterForm onSwitch={() => setMode('login')} />
  );
}
