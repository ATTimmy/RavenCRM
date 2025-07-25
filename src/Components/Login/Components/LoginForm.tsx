import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setError } from '../../../Store/Slices/authSlice';
import { loginWithEmail, loginWithGoogle } from '../../../Services/Firebase/authService';
import { useAppDispatch } from '../../../Store/hooks';

type LoginFormProps = {
  onSwitch: () => void;
};

export function LoginForm({ onSwitch }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const user = await loginWithEmail(email, password);
    if (user) {
      navigate('/home');
    } else {
      dispatch(setError('Invalid email or password.'));
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const user = await loginWithGoogle();
    if (user) {
      navigate('/home');
    } else {
      dispatch(setError('Google login failed.'));
    }
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">Sign in to RavenCRM</h1>

      <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
        <input
          className="p-3 rounded bg-gray-700 text-white"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="p-3 rounded bg-gray-700 text-white"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-white text-black py-2 rounded font-semibold">
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="bg-blue-600 text-white py-2 rounded font-semibold"
        >
          Continue with Google
        </button>
        <p className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <button onClick={onSwitch} className="text-blue-400 hover:underline">
            Register
          </button>
        </p>
      </form>
    </>
  );
}
