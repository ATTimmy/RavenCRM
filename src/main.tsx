import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './Styles/main.scss';
import { Provider } from 'react-redux';
import { store } from './Store';

// Hydrate the app on the client using the server-rendered HTML in #root.
// Wrap with BrowserRouter to enable client-side routing.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
