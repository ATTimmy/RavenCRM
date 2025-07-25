import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerWithEmail } from '../../../Services/Firebase/authService';
import { useAppDispatch } from '../../../Store/hooks';
import { setError } from '../../../Store/Slices/authSlice';

type RegisterFormProps = {
  onSwitch: () => void;
};

export function RegisterForm({ onSwitch }: RegisterFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const user = await registerWithEmail(email, password);
    if (user) {
      navigate('/home');
    } else {
      dispatch(setError('Registration failed.'));
    }
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">Create your RavenCRM account</h1>

      <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
          {loading ? 'Creating account...' : 'Register'}
        </button>
        <p className="text-sm text-center mt-2">
          Already have an account?{' '}
          <button onClick={onSwitch} className="text-blue-400 hover:underline">
            Sign in
          </button>
        </p>
      </form>
    </>
  );
}
