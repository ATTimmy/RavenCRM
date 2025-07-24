import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './Store';
import { useFirebaseAuthListener } from './Hooks/useFirebaseAuthListener';

export default function App() {
  useFirebaseAuthListener();
  return (
    <Routes>
      <Provider store={store}>
        <Route path="/" element={<Home />} />
      </Provider>
    </Routes>
  );
}
