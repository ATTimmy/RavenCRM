import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { useFirebaseAuthListener } from './Hooks/useFirebaseAuthListener';
import Login from './Components/Login/Login';
import PrivateRoute from './Routes/PrivateRoute';
import RedirectByAuth from './Routes/RedirectByAuth';

export default function App() {
  useFirebaseAuthListener();

  return (
    <Routes>
      <Route path="/" element={<RedirectByAuth />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
